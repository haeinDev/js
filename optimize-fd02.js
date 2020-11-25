(function(waitFor) {
  // Build variation
  var variation = '42-2';
  document.documentElement.dataset.variation = [
    document.documentElement.dataset.variation || '',
    '42-2',
  ]
    .join(' ')
    .trim();
  var isMobile = false;

  if (window.innerWidth <= 767) {
    isMobile = true;
  }

  waitFor('form#lf_requestInformationForm', makeChanges, {
    method: 'animation',
  });

  function makeChanges() {
    var secondFieldSet = document.querySelector(
      'form#lf_requestInformationForm > fieldset:nth-child(2)'
    );
    var accordions = document.querySelectorAll(
      'form#lf_requestInformationForm > fieldset.accordion'
    ); // Mobile title

    secondFieldSet
      .querySelector('.row:first-child')
      .insertAdjacentHTML(
        'beforebegin',
        '<h2 class="formTitle mobile-title">Request Information</h2>'
      );
    document
      .querySelector(
        'form#lf_requestInformationForm > fieldset:nth-child(1) > .leadFormHeading'
      )
      .insertAdjacentHTML(
        'beforebegin',
        '<a href="https://www.franchisedirect.com/" class="logo mobile-logo" data-cms-ai="0"><img src="https://static.franchisedirect.ie/dims4/default/664fbf1/2147483647/resize/x36/quality/95/?url=https%3A%2F%2Fd1imm0s6tc8o7m.cloudfront.net%2Fc0%2Fac%2F735f2e8c4e199dcac226131a9034%2Flogo.png" alt="Franchise Direct">\n    </a>'
      );
    [].forEach.call(accordions, function(accordion) {
      secondFieldSet.appendChild(accordion);
    });
    var fieldsetRows = document.querySelectorAll(
      'form#lf_requestInformationForm > .row'
    );
    [].forEach.call(fieldsetRows, function(fieldsetRow) {
      secondFieldSet.appendChild(fieldsetRow);
    });
    var originalCopy = document.querySelector('.info-box-intro').innerHTML;
    document.querySelector('.info-box-intro').innerHTML = originalCopy.replace(
      'below',
      'now'
    );
    var target = document.querySelector('h2.formTitle');
    target.insertAdjacentHTML(
      'beforebegin',
      '<div class="custom-header"><a href="https://www.franchisedirect.com/" class="logo"><img src="https://static.franchisedirect.ie/dims4/default/664fbf1/2147483647/resize/x36/quality/95/?url=https%3A%2F%2Fd1imm0s6tc8o7m.cloudfront.net%2Fc0%2Fac%2F735f2e8c4e199dcac226131a9034%2Flogo.png" alt="Franchise Direct">\n  </a></div>'
    );
    document.querySelector('.custom-header').appendChild(target);

    if (isMobile && variation === '42-2') {
      document.querySelector('.LeadFormPage-leadForm.inner').scrollTo({
        top: 0,
        left: 0,
      });
    }
  }

  document.documentElement.appendChild(
    document.createElement('style')
  ).textContent = [
    'html {',
    '  -webkit-text-size-adjust: 100%;',
    '}',
    'form#lf_requestInformationForm {',
    '  display: flex;',
    '  width: 100% !important;',
    '  height: 100%;',
    '  padding: 0;',
    '  min-height: 100vh;',
    '}',
    'form#lf_requestInformationForm > fieldset {',
    '  padding: 20px 5% 0;',
    '}',
    'form#lf_requestInformationForm > fieldset:nth-child(2) {',
    '  background-color: #f0f0f0;',
    '}',
    '.LeadFormPage-leadForm.inner {',
    '  max-width: 100% !important;',
    '  overflow-y: scroll;',
    '  height: 100%;',
    '}',
    '.formHolder.blue.lead_main {',
    '  padding: 0 !important;',
    '}',
    '.simpleBox.lf-slide.fancyLeadFormContainer.active {',
    '  overflow: hidden;',
    '  padding: 0;',
    '}',
    '.custom-header {',
    '  display: flex;',
    '  justify-content: space-around;',
    '  align-items: center;',
    '  background-color: #385879 !important;',
    '}',
    '.custom-header > h2.formTitle {',
    '  font-weight: bold;',
    '  font-size: 30px;',
    '}',
    "[data-variation*='42-1']",
    '  form#lf_requestInformationForm',
    '  > fieldset:nth-child(2) {',
    '  border-left: 1px solid #949494;',
    '}',
    "[data-variation*='42-2'] .custom-header,",
    "[data-variation*='42-2'] form#lf_requestInformationForm {",
    '  flex-direction: row-reverse;',
    '}',
    "[data-variation*='42-2']",
    '  form#lf_requestInformationForm',
    '  > fieldset:nth-child(2) {',
    '  border-right: 1px solid #949494;',
    '}',
    '.mobile-logo,',
    '.mobile-title {',
    '  display: none;',
    '}',
    '.mobile-title + .row {',
    '  margin-top: 0;',
    '}',
    '#lead_verify > #simpleBoxContainer {',
    '  margin: auto;',
    '}',
    'div#lead_verify {',
    '  margin-top: 30px;',
    '}',
    '@media (max-width: 767px) {',
    "  [data-variation*='42-1'] .custom-header > .formTitle,",
    "  [data-variation*='42-2'] .custom-header > .logo,",
    "  [data-variation*='42-1'] .mobile-logo,",
    "  [data-variation*='42-2'] .mobile-title {",
    '    display: none;',
    '  }',
    '  .mobile-logo,',
    '  .mobile-title {',
    '    display: block;',
    '    position: absolute;',
    '    top: 0;',
    '    text-align: center;',
    '    width: 100%;',
    '    left: 0;',
    '    right: 0;',
    '    margin: 0;',
    '    background-color: #385879;',
    '    padding: 10px 0;',
    '    font-weight: bold;',
    '  }',
    "  [data-variation*='42-2'] form#lf_requestInformationForm {",
    '    flex-direction: column-reverse;',
    '  }',
    "  [data-variation*='42-1'] .mobile-title + .row {",
    '    margin-top: 30px;',
    '  }',
    "  [data-variation*='42-2'] .mobile-logo + .leadFormHeading {",
    '    margin-top: 60px;',
    '  }',
    '  form#lf_requestInformationForm {',
    '    flex-wrap: wrap;',
    '    padding: 0;',
    '  }',
    '  .simpleBox.lf-slide.fancyLeadFormContainer.active,',
    '  .LeadFormPage-leadForm.inner {',
    '    overflow: auto;',
    '  }',
    "  [data-variation*='42-1']",
    '    form#lf_requestInformationForm',
    '    > fieldset:nth-child(2),',
    "  [data-variation*='42-2']",
    '    form#lf_requestInformationForm',
    '    > fieldset:nth-child(1) {',
    '    position: relative;',
    '  }',
    "  [data-variation*='42-1']",
    '    form#lf_requestInformationForm',
    '    > fieldset:nth-child(2) {',
    '    margin-top: 20px;',
    '  }',
    "  [data-variation*='42-2']",
    '    form#lf_requestInformationForm',
    '    > fieldset:nth-child(2) {',
    '    padding-bottom: 0;',
    '    padding-bottom: 20px;',
    '  }',
    '  .custom-header > h2.formTitle {',
    '    font-size: 26px;',
    '  }',
    '}',
  ].join('\n');
})(function(target, callback, options) {
  // Default settings
  var settings = {
    method: 'mutation',
    // mutation | interval | animation
    once: true,
    options: {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: false,
    },
  }; // Update settings with supplied configuration

  for (var option in options) {
    settings[option] = options[option];
  } // Mutation Observer

  if (settings.method === 'mutation') {
    function mutationCallback(mutationList, observer) {
      return mutationList.forEach(function(mutation) {
        callback(mutation);

        if (settings.once) {
          observer.disconnect();
        }
      });
    } // Accept either DOM node or selector for target

    if (typeof target === 'string') {
      target = document.querySelector(target);
    }

    var observer = new MutationObserver(mutationCallback);
    observer.observe(target, settings.options);
  } // Set Interval

  if (settings.method === 'interval') {
    function intervalCallback() {
      if (document.querySelector(target)) {
        callback(document.querySelector(target));
        clearInterval(observer);
      }
    }

    var observer = setInterval(intervalCallback, 1000 / 60);
  } // Request Animation Frame

  if (settings.method === 'animation') {
    function animationCallback() {
      if (document.querySelector(target)) {
        callback(document.querySelector(target));
      } else {
        window.requestAnimationFrame(animationCallback);
      }
    }

    window.requestAnimationFrame(animationCallback);
  }
});
