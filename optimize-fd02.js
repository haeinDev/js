(function(waitFor) {
    // Build variation
    var variation = '42-1';
    document.documentElement.dataset.variation = [
      document.documentElement.dataset.variation || '',
      '42-1',
    ]
      .join(' ')
      .trim();

      waitFor('form#lf_requestInformationForm', makeChanges, {
        method: 'animation',
      });

      function makeChanges() {
        var secondFieldSet = document.querySelector(
          'form#lf_requestInformationForm>fieldset:nth-of-type(2)>div:nth-of-type(6)>div>label'
        );
        
        secondFieldSet
          .insertAdjacentHTML(
            'beforeend',
            '<div class="tooltip"><i class="fa fa-info-circle inforIcon"></i><p>what is this?</p><span class="tooltiptext">Available cash:<br> Available cash includes cash deposits, savings, cash from family and friends and liquid assets (e.g. property, stocks, bonds) which can be easily converted to cash.</span></div>'
          );
          secondFieldSet.setAttribute("style", "display:flex;");

}(function(target, callback, options) {
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
});
