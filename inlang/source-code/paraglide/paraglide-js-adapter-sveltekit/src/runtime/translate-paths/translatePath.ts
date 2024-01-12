import { parsePath } from "../utils/parse-path.js"
import { serializeRoute } from "../utils/serialize-path.js"
import { getCanonicalPath } from "./getCanonicalPath.js"
import { getTranslatedPath } from "./getTranslatedPath.js"
import type { PathTranslations } from "./path-translations.js"

/**
 * Utility function to translate a path in one language to another language
 */
export function translatePath(
	path: string,
	targetLanguage: string,
	translations: PathTranslations<string>,
	opts: { base: string; availableLanguageTags: readonly string[]; defaultLanguageTag: string }
): string {
	const {
		path: targetedPathSource,
		lang,
		isDataRequest,
	} = parsePath(path, {
		base: opts.base,
		availableLanguageTags: opts.availableLanguageTags,
		defaultLanguageTag: opts.defaultLanguageTag,
	})

	const canonicalPath = getCanonicalPath(targetedPathSource, lang, translations)
	const translatedPathTarget = getTranslatedPath(canonicalPath, targetLanguage, translations)

	return serializeRoute({
		path: translatedPathTarget,
		base: opts.base,
		isDataRequest,
		includeLanguage: true,
		lang: targetLanguage,
		defaultLanguageTag: opts.defaultLanguageTag,
	})
}
