console.log("content.js");

const disabledKeyCodes = new Set([
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57
])
const disabledNumpadKeyCodes = new Set([
  12,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  45,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105
]);

window.addEventListener(
  "keydown",
  function(e) {
    if (disabledNumpadKeyCodes.has(e.which) && e.location == 3 || disabledKeycodes.has(e.which)) {
      e.stopPropagation();
    }
  },
  true
);
