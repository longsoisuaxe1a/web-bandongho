$(document).ready(function() {
    $("#hinh1").click(function() {
        $("#Hinh1").modal();
    })
    $("#hinh2").click(function() {
        $("#Hinh2").modal();
    })
    $("#hinh3").click(function() {
        $("#Hinh3").modal();
    })
    $("#hinh4").click(function() {
        $("#Hinh4").modal();
    })
    $("#hinh5").click(function() {
        $("#Hinh5").modal();
    })
    $("#hinh6").click(function() {
        $("#Hinh6").modal();
    })
    $("#hinh7").click(function() {
        $("#Hinh7").modal();
    })
    $("#hinh8").click(function() {
        $("#Hinh8").modal();
    })
    $("#hinh9").click(function() {
        $("#Hinh9").modal();
    })
    $("#hinh10").click(function() {
        $("#Hinh10").modal();
    })
    $("#hinh11").click(function() {
        $("#Hinh11").modal();
    })
    $("#hinh12").click(function() {
        $("#Hinh12").modal();
    })
    $("#hinh13").click(function() {
        $("#Hinh13").modal();
    })
    $("#hinh14").click(function() {
        $("#Hinh14").modal();
    })
    $("#hinh15").click(function() {
        $("#Hinh15").modal();
    })
    $("#hinh16").click(function() {
        $("#Hinh16").modal();
    })
    $("#btnMua1").click(function() {
        $("#mua").modal();
        // kiểm tra họ tên
        function kiemTraHoTen() {
            if ($("#txtHoTen").val() == "") {
                $("#erHoTen").html("Bắt buộc nhập");
                return false;
            }
            var regex = /^[a-zA-Z0-9' ]+$/;
            if (!regex.test($("#txtHoTen").val())) {
                $("#erHoTen").html("Nhập sai mẫu");
                return false;
            } else {
                $("#erHoTen").html("Hợp lệ");
                return true;
            }
        }
        $("#txtHoTen").blur(kiemTraHoTen);
        // kiểm tra email
        function kiemTraEmail() {
            if ($("#txtEmail").val() == "") {
                $("#erEmail").html("Bắt buộc nhập");
                return false;
            }
            var regex = /^[a-zA-Z_' ]\w*\@gmail\.com$/;
            if (!regex.test($("#txtEmail").val())) {
                $("#erEmail").html("Nhập sai mẫu");
                return false;
            } else {
                $("#erEmail").html("Hợp lệ");
                return true;
            }
        }
        $("#txtEmail").blur(kiemTraEmail);
        // địa chỉ
        function kiemTraDiaChi() {
            if ($("#txtDiaChi").val() == "") {
                $("#erDiaChi").html("Bắt buộc nhập");
                return false;
            } else {
                $("#erDiaChi").html("Hợp lệ");
                return true;
            }
        }
        $("#txtDiaChi").blur(kiemTraDiaChi);

        function kiemTraSoDienThoai() {
            var regex = /^[0]\d{9}$/;
            if ($("#txtSoDienThoai").val() == "") {
                $("#erSoDienThoai").html("Bắt buộc nhập");
                return false;
            }
            if (!regex.test($("#txtSoDienThoai").val())) {
                $("#erSoDienThoai").html("Nhập sai mẫu");
                return false;
            } else {
                $("#erSoDienThoai").html("Hợp lệ");
                return true;
            }
        }
        $("#txtSoDienThoai").blur(kiemTraSoDienThoai);

        $("#txtSoLuong").change(function() {
            var input = $("#txtSoLuong").val();
            var gia = input * 5000000;
            $("#txtThanhTien").val(gia);
        })

        function kiemTraSoLuong() {
            var regex = /^[1-9]\d*$/;
            if (($("#txtSoLuong").val() == "0")) {
                $("#erSoLuong").html("Số lượng lớn hơn 0!");
                return false;
            } else if (!regex.test($("#txtSoLuong").val())) {
                $("#erSoLuong").html("Nhập số nguyên dương lớn hơn 0");
                return false;
            } else {
                $("#erSoLuong").html("Hợp lệ");
                return true;
            }
        }
        $("#txtSoLuong").blur(kiemTraSoLuong);

        $("#btnDatMua").click(function() {
            if (!kiemTraHoTen() || !kiemTraEmail() || !kiemTraDiaChi() || !kiemTraSoDienThoai()) {
                $("#thongBao").html("Bạn vui lòng nhập đầy đủ thông tin!");
                return false;
            }
            $("#mua").modal("hide");
            return true;
        })
    })
})