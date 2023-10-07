// Enable code copying
document.querySelectorAll("pre.code").forEach(function (codeBlock) {
    var copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "Copy Code";
    codeBlock.appendChild(copyButton);

    copyButton.addEventListener("click", function () {
        var codeToCopy = codeBlock.querySelector("code").textContent;
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = codeToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);

        copyButton.textContent = "Copied!";
        setTimeout(function () {
            copyButton.textContent = "Copy Code";
        }, 2000);
    });
});

