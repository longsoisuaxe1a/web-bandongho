$(document).ready(function() {
    $("#baoHanh").click(function() {
        $("#modal-BaoHanh").modal();
    })

    function kiemTraHovaTen() {
        var input = $("#txtHovaTen").val();
        var regex = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if (input == "") {
            $("#erHovaTen").html("Bắt buộc nhập");
            return false;
        } else if (!regex.test(input)) {
            $("#erHovaTen").html("Nhập chữ cái đầu là chữ hoa");
        } else {
            $("#erHovaTen").html("Hợp lệ");
            return true;
        }
    }
    $("#txtHovaTen").blur(kiemTraHovaTen);

    function kiemTraSDT() {
        var input = $("#txtSDT").val();
        var regex = /^[0]\d{9}$/;
        if (input == "") {
            $("#erSDT").html("Bắt buộc nhập");
            return false;
        } else if (!regex.test(input)) {
            $("#erSDT").html("Nhập số đầu tiên là số 0")
            return false;
        } else {
            $("#erSDT").html("Hợp lệ");
            return true;
        }
    }
    $("#txtSDT").blur(kiemTraSDT);

    function kiemTraEmail() {
        var input = $("#txtEmaill").val();
        var regex = /^[a-zA-Z_][a-zA-Z0-9_]*\@gmail\.com$/;
        if (input == "") {
            $("#erEmaill").html("Bắt buộc nhập");
            return false;
        } else if (!regex.test(input)) {
            $("#erEmaill").html("Nhập sai mẫu");
            return false;
        } else {
            $("#erEmaill").html("Hợp lệ");
            return true;
        }
    }
    $("#txtEmaill").blur(kiemTraEmail);

    $("#gui").click(function() {
        if (!kiemTraHovaTen() || !kiemTraEmail() || !kiemTraSDT()) {
            $("#thongBaoo").html("Vui lòng nhập đúng và đầy đủ!");
            return false;
        }
        $("#modal-BaoHanh").modal("hide");
        return true;
    })
})