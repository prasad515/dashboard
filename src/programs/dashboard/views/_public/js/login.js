$(document).ready(function () {
    $("#my_form").on("submit", function (e) {
        e.preventDefault();

        let form = $(this);

        let serializeFormData = $("form#my_form :input")
            .filter(function (index, element) {
                return $(element).val() != "";
            })
            .serialize();
        console.log("checking serialized data::", serializeFormData);
        $.ajax({
            type: form.attr('method'),
            url: "/login",
            data: serializeFormData,
            success: function (data) {
                console.log("success");

            }
        });
    })
})