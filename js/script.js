$(function() {
    let helpModal = $(".modal-help");
    let sentModal = $(".modal-sent");
    let activeButton = $(".act-btn");
    let modalHelpClose = $(".modal-help-close");
    let input = $(".inp");
    let form = $(".modal-help form");
    activeButton.on("click", () => {
        helpModal.css("display", "block")
    })
    modalHelpClose.on("click", () => {
        helpModal.css("display", "none")
    })
    input.on("change", () => {
        input.each(function () {
            if ($(this).val().length == 0) {
                $(this).addClass("required");
            } else {
                $(this).removeClass("required");
            }
        })
    })
    form.on("submit", e => {
        let full = true;
        $(".inp").each(function() {
            if ($(this).val().trim().length == 0) {
                full = false;
            }
        })
        e.preventDefault();

        if (!full) {
            return;
        }
        helpModal.css("display", "none");
        sentModal.css("display", "block");

        setTimeout(() => {
            sentModal.css("display", "none");
        }, 3000);
    })
})