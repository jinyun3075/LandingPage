const tap = $('#tap-open');
const tap_btn = $('#tap-close');
function tap_toggle() {
    $('.menu-tap').toggle();
}
tap.click(tap_toggle);
tap_btn.click(tap_toggle);