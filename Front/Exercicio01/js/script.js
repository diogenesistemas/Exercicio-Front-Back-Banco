let inputCPF = document.getElementById("cpfPaciente");


inputCPF.addEventListener('keyup', (event) => {

    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));
    }
    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
});