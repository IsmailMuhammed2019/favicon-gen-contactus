function validate() {
  if (document.myForm.Email.value == '') {
    alert('Please provide your Email!')
    document.contact.Email.focus()
    return false
  }
  if (
    document.contact.Subject.value == '' ||
    isNaN(contact.contact.Subject.value) ||
    document.contact.Subject.value.length != 5
  ) {
    alert('Please provide a subject for your mail.')
    document.myForm.Zip.focus()
    return false
  }
  if (document.contact.Textarea.value == '-1') {
    alert('Please provide your Message before you send!')
    return false
  }
  return true
}
