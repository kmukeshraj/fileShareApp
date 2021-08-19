const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector("#browseBtn");

const bgProgress = document.querySelector(".bg-progress");
const progressPercent = document.querySelector("#progressPercent");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const status = document.querySelector(".status");


browseBtn.addEventListener("click", () => {
    fileInput.click();
  });
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    //   console.log("dropped", e.dataTransfer.files[0].name);
    const files = e.dataTransfer.files;
    if (files.length === 1) {
      if (files[0].size < maxAllowedSize) {
        fileInput.files = files;
        uploadFile();
      } else {
        showToast("Max file size is 100MB");
      }
    } else if (files.length > 1) {
      showToast("You can't upload multiple files");
    }
    dropZone.classList.remove("dragged");
  });
  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragged");
  
    // console.log("dropping file");
  });
  
  dropZone.addEventListener("dragleave", (e) => {
    dropZone.classList.remove("dragged");
  
    console.log("drag ended");
  });
  
  // file input change and uploader
  fileInput.addEventListener("change", () => {
    if (fileInput.files[0].size > maxAllowedSize) {
      showToast("Max file size is 100MB");
      fileInput.value = ""; // reset the input
      return;
    }
    uploadFile();
  });
  
  // sharing container listenrs
  copyURLBtn.addEventListener("click", () => {
    fileURL.select();
    document.execCommand("copy");
    showToast("Copied to clipboard");
  });
  
  fileURL.addEventListener("click", () => {
    fileURL.select();
  });
  