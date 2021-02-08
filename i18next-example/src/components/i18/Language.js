import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

function Language() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <button onClick={() => changeLanguage('en')} >EN</button>
            <button onClick={() => changeLanguage('de')} >DE</button>
            <hr />

            {/* Method 1 to change language */}
            <Trans i18nKey="description.part1" />

            {/* Method 2 to change language */}
            <div>{t("description.part2")}</div>

        </div>
    )
}

export default Language

