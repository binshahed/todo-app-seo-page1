// Get DOM elements
const uploadBtn = document.getElementById('upload-btn')
const fileInput = document.getElementById('file-input')
const fileList = document.getElementById('file-list')
const submitFile = document.getElementById('submit-file')

const openModalBtn = document.querySelectorAll('.open-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const modalOverlay = document.getElementById('modal-overlay')

const allFile = []

// Add event listener to the upload button
uploadBtn.addEventListener('click', () => {
  fileInput.click()
})
// Add event listener to the submit button
submitFile.addEventListener('click', () => {
  console.log(allFile)
  modalOverlay.style.display = 'none'
})
// Add event listener to the open modal button

openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    modalOverlay.style.display = 'block'
  })
})

// Add event listener to the close modal button
closeModalBtn.addEventListener('click', () => {
  // Hide the modal overlay
  modalOverlay.style.display = 'none'
})

// Add event listener to the file input
fileInput.addEventListener('change', () => {
  fileList.innerHTML = ''
  // Get selected files
  const files = fileInput.files

  // Iterate through each file
  for (let i = 0; i < files.length; i++) {
    // Create a new list item
    const listItem = document.createElement('li')

    allFile.push(files[i])

    // Add file name and extension to the list item
    const fileName = document.createTextNode(files[i].name)
    const fileExtension = document.createTextNode(
      ` (${files[i].type.split('/')[1]})`
    )
    listItem.appendChild(fileName)
    listItem.appendChild(fileExtension)

    // Add the list item to the file list
    fileList.appendChild(listItem)
  }
  if (files) {
    submitFile.style.display = 'block'
  }
})
