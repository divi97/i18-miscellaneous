import React from "react";

function GoogleTranslate() {

    const onLanguageDropdown = (e) => {
        console.log(e)
    }



    return (
    <>
      <div>
        <h1>Google Translate</h1>
        <h1>My Web Page</h1>
        <p>Hello everybody!</p>
        <p>Translate this page:</p>
        <div
          id="google_translate_element"
          onClick={(e) => onLanguageDropdown(e)}
        ></div>

        {/* <!-- class="notranslate" for not tanslating particular text --> */}
        <p className="notranslate">
          You can translate the content of this page by selecting a language in
          the select box.
        </p>
      </div>
    </>
  );
}

export default GoogleTranslate;
