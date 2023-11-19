$(document).ready(function() {
    $("#btnMua2").click(function() {
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
        // dat mua 3
    $("#btnMua3").click(function() {

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
                $("#mua3").modal("hide");
                return true;
            })
        })
        // mua 4
    $("#btnMua4").click(function() {

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
        // hinh 5
    $("#btnMua5").click(function() {

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
        // hinh 6
    $("#btnMua6").click(function() {

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
        // hinh 7
    $("#btnMua7").click(function() {

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
        // hinh 8
    $("#btnMua8").click(function() {

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
        // hinh 9
    $("#btnMua9").click(function() {

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
        // hinh 10
    $("#btnMua10").click(function() {

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
        // hinh 11
    $("#btnMua11").click(function() {

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
        // hinh 12
    $("#btnMua12").click(function() {

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
        // hinh 13
    $("#btnMua13").click(function() {

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
        // hinh 14
    $("#btnMua14").click(function() {

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
        // hinh 15
    $("#btnMua15").click(function() {

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
        // hinh 16
    $("#btnMua16").click(function() {

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