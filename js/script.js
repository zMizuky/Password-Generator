        var uppercase        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var lowercase        = 'abcdefghijklmnopqrstuvwxyz';
        var numbers          = '0123456789';
        var symbols          = '!@#$%&*()<>';

        var modo             = '';
        var textArea = document.getElementById("passwordText");


        function verify(){
            var checkbox_uppercase = document.getElementById("uppercase");
            var checkbox_lowercase = document.getElementById("lowercase");
            var checkbox_numbers = document.getElementById("numbers");
            var checkbox_symbols = document.getElementById("symbols");       
            modo = '';
            if (checkbox_uppercase.checked == true){
                modo += uppercase;
            }
            if (checkbox_lowercase.checked == true){
                modo += lowercase;
            }
            if (checkbox_numbers.checked == true){
                modo += numbers;
            }
            if (checkbox_symbols.checked == true){
                modo += symbols;
            }
        }
        function makeid(length, type) {
            var result           = '';
            var charactersLength = type.length;
            for ( var i = 0; i < length; i++ ) {
                result += type.charAt(Math.floor(Math.random() * charactersLength));
            }
                return result;
            }
        function copy() {
            textArea.select();
            document.execCommand("copy");
        }
        function generate() {
            var numb = numberSize = document.getElementById("sizeNumber").value;
            var result = makeid(numb, modo);
            textArea.setAttribute("value", result);
        }

        function normal() {
            document.getElementById("copyIg").innerHTML = "content_copy"
        }

        function copyStyle() {
            document.getElementById("copyIg").innerHTML = "check"
        }
        verify()
        generate()
