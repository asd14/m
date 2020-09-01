/**
 * Convert string to lower case
 *
 * @tag String
 * @signature ( source: string ): string
 *
 * @param   {string}  source  Source string
 *
 * @return  {string}
 *
 * @example
 * toLower("Lorem Ipsum")
 * // "lorem ipsum"
 */
const toLower = source => "".toLowerCase.call(source)

export { toLower }