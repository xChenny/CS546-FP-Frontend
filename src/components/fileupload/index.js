import axios from "axios";

// const readFile = desiredFile => {
//   const reader = new FileReader();
//   reader.readAsText(desiredFile, "UTF-8");
//   reader.onload = e => e.target.result;
//   reader.onerror = e => false;
// };

export const onSubmit = async (e, history) => {
  e.preventDefault();
  const file = e.target.fileUpload;
  const fileName = file.value.split("\\").slice(-1).pop()
  const desiredFile = file.files[0];
  // setting up axios to send multipart data
  const formData = new FormData();
  formData.append("file", desiredFile);
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  const promise = await axios.post(`/s3/${fileName}`, formData, config);
  const data = promise.data;
  console.log(`This is the returned data after uploading: ${data}`);
  console.log(data);
  history.push(`/editor/${fileName}`);
};
