/**
 * 国家代码和国家信息
 */

export const COUNTRY_CODES = [
  { code: '+1', key: 'us', flag: '🇺🇸' },
  { code: '+49', key: 'de', flag: '🇩🇪' },
  { code: '+81', key: 'jp', flag: '🇯🇵' },
  { code: '+82', key: 'kr', flag: '🇰🇷' },
  { code: '+44', key: 'gb', flag: '🇬🇧' },
  { code: '+33', key: 'fr', flag: '🇫🇷' },
  { code: '+39', key: 'it', flag: '🇮🇹' },
  { code: '+91', key: 'in', flag: '🇮🇳' },
  { code: '+55', key: 'br', flag: '🇧🇷' },
  { code: '+52', key: 'mx', flag: '🇲🇽' },
  { code: '+62', key: 'id', flag: '🇮🇩' },
  { code: '+7', key: 'ru', flag: '🇷🇺' },
  { code: '+90', key: 'tr', flag: '🇹🇷' },
  { code: '+66', key: 'th', flag: '🇹🇭' },
  { code: '+48', key: 'pl', flag: '🇵🇱' },
  { code: '+34', key: 'es', flag: '🇪🇸' },
  { code: '+886', key: 'tw', flag: '🇹🇼' },
  { code: '+852', key: 'hk', flag: '🇭🇰' },
  { code: '+65', key: 'sg', flag: '🇸🇬' },
  { code: '+60', key: 'my', flag: '🇲🇾' },
  { code: '+84', key: 'vn', flag: '🇻🇳' },
  { code: '+61', key: 'au', flag: '🇦🇺' },
  { code: '+31', key: 'nl', flag: '🇳🇱' },
  { code: '+46', key: 'se', flag: '🇸🇪' },
  { code: '+41', key: 'ch', flag: '🇨🇭' },
  { code: '+43', key: 'at', flag: '🇦🇹' },
  { code: '+32', key: 'be', flag: '🇧🇪' },
  { code: '+20', key: 'eg', flag: '🇪🇬' },
  { code: '+27', key: 'za', flag: '🇿🇦' },
  { code: '+30', key: 'gr', flag: '🇬🇷' },
  { code: '+40', key: 'ro', flag: '🇷🇴' },
  { code: '+45', key: 'dk', flag: '🇩🇰' },
  { code: '+47', key: 'no', flag: '🇳🇴' },
  { code: '+51', key: 'pe', flag: '🇵🇪' },
  { code: '+53', key: 'cu', flag: '🇨🇺' },
  { code: '+54', key: 'ar', flag: '🇦🇷' },
  { code: '+56', key: 'cl', flag: '🇨🇱' },
  { code: '+57', key: 'co', flag: '🇨🇴' },
  { code: '+58', key: 've', flag: '🇻🇪' },
  { code: '+63', key: 'ph', flag: '🇵🇭' },
  { code: '+64', key: 'nz', flag: '🇳🇿' },
  { code: '+92', key: 'pk', flag: '🇵🇰' },
  { code: '+93', key: 'af', flag: '🇦🇫' },
  { code: '+94', key: 'lk', flag: '🇱🇰' },
  { code: '+95', key: 'mm', flag: '🇲🇲' },
  { code: '+98', key: 'ir', flag: '🇮🇷' },
  { code: '+212', key: 'ma', flag: '🇲🇦' },
  { code: '+213', key: 'dz', flag: '🇩🇿' },
  { code: '+216', key: 'tn', flag: '🇹🇳' },
  { code: '+218', key: 'ly', flag: '🇱🇾' },
  { code: '+220', key: 'gm', flag: '🇬🇲' },
  { code: '+234', key: 'ng', flag: '🇳🇬' },
  { code: '+351', key: 'pt', flag: '🇵🇹' },
  { code: '+352', key: 'lu', flag: '🇱🇺' },
  { code: '+353', key: 'ie', flag: '🇮🇪' },
  { code: '+354', key: 'is', flag: '🇮🇸' },
  { code: '+355', key: 'al', flag: '🇦🇱' },
  { code: '+357', key: 'cy', flag: '🇨🇾' },
  { code: '+358', key: 'fi', flag: '🇫🇮' },
  { code: '+370', key: 'lt', flag: '🇱🇹' },
  { code: '+371', key: 'lv', flag: '🇱🇻' },
  { code: '+372', key: 'ee', flag: '🇪🇪' },
  { code: '+380', key: 'ua', flag: '🇺🇦' },
  { code: '+381', key: 'rs', flag: '🇷🇸' },
  { code: '+420', key: 'cz', flag: '🇨🇿' },
  { code: '+421', key: 'sk', flag: '🇸🇰' },
  { code: '+853', key: 'mo', flag: '🇲🇴' },
  { code: '+855', key: 'kh', flag: '🇰🇭' },
  { code: '+856', key: 'la', flag: '🇱🇦' },
  { code: '+880', key: 'bd', flag: '🇧🇩' },
  { code: '+960', key: 'mv', flag: '🇲🇻' },
  { code: '+961', key: 'lb', flag: '🇱🇧' },
  { code: '+962', key: 'jo', flag: '🇯🇴' },
  { code: '+963', key: 'sy', flag: '🇸🇾' },
  { code: '+964', key: 'iq', flag: '🇮🇶' },
  { code: '+965', key: 'kw', flag: '🇰🇼' },
  { code: '+966', key: 'sa', flag: '🇸🇦' },
  { code: '+967', key: 'ye', flag: '🇾🇪' },
  { code: '+968', key: 'om', flag: '🇴🇲' },
  { code: '+971', key: 'ae', flag: '🇦🇪' },
  { code: '+972', key: 'il', flag: '🇮🇱' },
  { code: '+973', key: 'bh', flag: '🇧🇭' },
  { code: '+974', key: 'qa', flag: '🇶🇦' },
  { code: '+977', key: 'np', flag: '🇳🇵' },
  { code: '+86', key: 'cn', flag: '🇨🇳' }
]

/**
 * 获取国家名称
 * @param {Function} t - 翻译函数
 * @param {string} key - 国家代码键
 * @returns {string} 国家名称
 */
export function getCountryName(t, key) {
  return t(`countries.${key}`)
}

/**
 * 获取完整的国家列表（包含翻译后的名称）
 * @param {Function} t - 翻译函数
 * @returns {Array} 国家列表
 */
export function getCountriesList(t) {
  return COUNTRY_CODES.map(country => ({
    ...country,
    name: getCountryName(t, country.key)
  }))
}
