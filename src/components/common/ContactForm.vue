<template>
  <!--
    联系表单组件
    用于收集用户信息并通过EmailJS发送邮件
  -->
  <div class="contact-form-container">
    <form @submit.prevent="handleSubmit" class="contact-form">
      <!-- 姓氏和名字 -->
      <div class="form-row">
        <div class="form-group">
          <label for="firstName" class="form-label">
            {{ t("contact.firstName") }}
            <span class="required">{{ t("contact.required") }}</span>
          </label>
          <input
            type="text"
            id="firstName"
            v-model="formData.firstName"
            class="form-input"
            :class="{ error: errors.firstName }"
            :placeholder="t('contact.firstNamePlaceholder')"
            :disabled="loading"
          />
          <span v-if="errors.firstName" class="error-message">
            {{ t("contact.errorFirstName") }}
          </span>
        </div>

        <div class="form-group">
          <label for="lastName" class="form-label">
            {{ t("contact.lastName") }}
            <span class="required">{{ t("contact.required") }}</span>
          </label>
          <input
            type="text"
            id="lastName"
            v-model="formData.lastName"
            class="form-input"
            :class="{ error: errors.lastName }"
            :placeholder="t('contact.lastNamePlaceholder')"
            :disabled="loading"
          />
          <span v-if="errors.lastName" class="error-message">
            {{ t("contact.errorLastName") }}
          </span>
        </div>
      </div>

      <!-- 公司名称 -->
      <div class="form-group">
        <label for="company" class="form-label">
          {{ t("contact.company") }}
          <span class="required">{{ t("contact.required") }}</span>
        </label>
        <input
          type="text"
          id="company"
          v-model="formData.company"
          class="form-input"
          :class="{ error: errors.company }"
          :placeholder="t('contact.companyPlaceholder')"
          :disabled="loading"
        />
        <span v-if="errors.company" class="error-message">
          {{ t("contact.errorCompany") }}
        </span>
      </div>

      <!-- 邮箱输入 -->
      <div class="form-group">
        <label for="email" class="form-label">
          {{ t("contact.emailLabel") }}
          <span class="required">{{ t("contact.required") }}</span>
        </label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="form-input"
          :class="{ error: errors.email }"
          :placeholder="t('contact.emailPlaceholder')"
          :disabled="loading"
        />
        <span v-if="errors.email" class="error-message">
          {{
            errors.email === "请输入邮箱"
              ? t("contact.errorEmail")
              : t("contact.errorEmailInvalid")
          }}
        </span>
      </div>

      <!-- 电话号码（带国家选择） -->
      <div class="form-group">
        <label for="phone" class="form-label">
          {{ t("contact.phone") }}
          <span class="required">{{ t("contact.required") }}</span>
        </label>
        <div class="phone-input-group">
          <select
            v-model="formData.countryCode"
            class="country-select"
            :disabled="loading"
          >
            <option
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
            >
              {{ country.flag }} {{ country.name }} ({{ country.code }})
            </option>
          </select>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            class="form-input phone-input"
            :class="{ error: errors.phone }"
            :placeholder="t('contact.phonePlaceholder')"
            :disabled="loading"
          />
        </div>
        <span v-if="errors.phone" class="error-message">
          {{ t("contact.errorPhone") }}
        </span>
      </div>

      <!-- 主题输入 -->
      <div class="form-group">
        <label for="subject" class="form-label">
          {{ t("contact.subject") }}
        </label>
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          class="form-input"
          :class="{ error: errors.subject }"
          :placeholder="t('contact.subjectPlaceholder')"
          :disabled="loading"
        />
        <span v-if="errors.subject" class="error-message">
          {{ errors.subject }}
        </span>
      </div>

      <!-- 留言输入 -->
      <div class="form-group">
        <label for="message" class="form-label">
          {{ t("contact.message") }}
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-textarea"
          :class="{ error: errors.message }"
          :placeholder="t('contact.messagePlaceholder')"
          rows="6"
          :disabled="loading"
        ></textarea>
        <span v-if="errors.message" class="error-message">
          {{ errors.message }}
        </span>
      </div>

      <!-- 提交按钮 -->
      <button
        type="submit"
        class="btn btn-primary btn-large"
        :disabled="loading"
      >
        <span v-if="!loading">{{ t("contact.submit") }}</span>
        <span v-else>{{ t("contact.submitting") }}</span>
      </button>

      <!-- 提交结果提示 -->
      <transition name="fade">
        <div v-if="submitMessage" :class="['submit-message', submitStatus]">
          {{ submitMessage }}
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { sendEmail, validateForm } from "@/utils/email";
import { useLanguage } from "@/composables/useLanguage";
import { COUNTRY_CODES, getCountryName } from "@/utils/countries";

export default {
  name: "ContactForm",

  setup() {
    const { t } = useLanguage();

    // 表单数据
    const formData = reactive({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      countryCode: "+1",
      phone: "",
      subject: "",
      message: "",
    });

    // 计算国家列表（根据当前语言动态翻译）
    const countries = computed(() => {
      return COUNTRY_CODES.map((country) => ({
        ...country,
        name: getCountryName(t, country.key),
      }));
    });

    // 验证错误信息
    const errors = reactive({});

    // 加载状态
    const loading = ref(false);

    // 提交结果
    const submitMessage = ref("");
    const submitStatus = ref("");

    /**
     * 处理表单提交
     */
    const handleSubmit = async () => {
      // 清空之前的错误和消息
      Object.keys(errors).forEach((key) => delete errors[key]);
      submitMessage.value = "";

      // 验证表单
      const validation = validateForm(formData);

      if (!validation.isValid) {
        // 显示验证错误
        Object.assign(errors, validation.errors);
        return;
      }

      // 发送邮件
      loading.value = true;

      try {
        const result = await sendEmail(formData);

        if (result.success) {
          // 发送成功
          submitStatus.value = "success";
          submitMessage.value = t("contact.success");

          // 清空表单
          Object.keys(formData).forEach((key) => {
            if (key === "countryCode") {
              formData[key] = "+86";
            } else {
              formData[key] = "";
            }
          });

          // 5秒后隐藏成功消息
          setTimeout(() => {
            submitMessage.value = "";
          }, 5000);
        } else {
          // 发送失败
          submitStatus.value = "error";
          submitMessage.value = t("contact.error");
        }
      } catch (error) {
        submitStatus.value = "error";
        submitMessage.value = t("contact.error");
      } finally {
        loading.value = false;
      }
    };

    return {
      formData,
      countries,
      errors,
      loading,
      submitMessage,
      submitStatus,
      handleSubmit,
      t,
    };
  },
};
</script>

<style scoped>
/**
 * 联系表单样式
 */

.contact-form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* 表单行（两列布局） */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

/* 表单组 */
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

/* 标签 */
.form-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.required {
  color: var(--color-error);
}

/* 输入框 */
.form-input,
.form-textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: all var(--transition-base);
  background: var(--color-bg-primary);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: var(--color-error);
}

.form-input:disabled,
.form-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--color-bg-secondary);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: var(--line-height-relaxed);
}

/* 电话输入组 */
.phone-input-group {
  display: flex;
  gap: var(--spacing-sm);
}

.country-select {
  width: 180px;
  padding: var(--spacing-md);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: all var(--transition-base);
  background: var(--color-bg-primary);
  cursor: pointer;
}

.country-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.phone-input {
  flex: 1;
}

/* 错误消息 */
.error-message {
  font-size: var(--font-size-xs);
  color: var(--color-error);
  margin-top: var(--spacing-xs);
}

/* 提交结果消息 */
.submit-message {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-align: center;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .phone-input-group {
    flex-direction: column;
  }

  .country-select {
    width: 100%;
  }

  .form-input,
  .form-textarea {
    font-size: var(--font-size-sm);
  }
}
</style>
