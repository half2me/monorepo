/**
 * The Alias for the ParaglideJS Outdir
 * The vite plugin will replace this with the actual outdir
 *
 * This allows you to write imports like this:
 * @example
 * ```ts
 * import { languageTag } from {OUTDIR_ALIAS}/runtime.js"
 * ```
 */
export const OUTDIR_ALIAS = "paraglide-adapter-sveltekit:outdir:"
export const TRANSLATE_PATH_MODULE_ID = "paraglide-adapter-sveltekit:translate-path"
export const HEADER_COMPONENT_MODULE_ID = "paraglide-adapter-sveltekit:header-component"

/**
 * The name to give the `languageTag` function when injecting it into the code
 */
export const LANGUAGE_TAG_ALIAS = "paraglide_adapter_sveltekit_language_tag"
export const TRANSLATE_PATH_FUNCTION_NAME = "paraglide_adapter_sveltekit_translate_path"
