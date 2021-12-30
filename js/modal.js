const inp_modal = $('.inp-btn');
const modal_btn = $('.modal_btn');
const modal = $('.modal');
function toggle() {
    modal.toggle();
}
inp_modal.click(toggle);
modal_btn.click(toggle);