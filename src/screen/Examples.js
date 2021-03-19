/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";

// import { useCallback, useEffect, useRef, useState } from "react";
// import Examples from "../components/ImageSlider";

// import { useRef, useState } from "react";

// import {useState} from 'react';

// import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete';

// export default function Examples ({ isScriptLoded, isScritLoadSucceed }) {

//     const [address, setAddress] = useState("");
//     // const [coordinates, setCoordinates] = useState({lat: null, lng: null})

//     const handleAddressChange = async value => {
//         const result = await geocodeByAddress(value);
//         console.log(result[0].address_components);
//         console.log(result[0].address_components[0].long_name);
//     }

//     return (
//         <div>

//             <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleAddressChange} >
//                 {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                     <div>
//                         {/* <p>Lat: {coordinates.lat}</p>
//                         <p>Lng: {coordinates.lng}</p> */}
//                         <input {...getInputProps({placeholder: "Search ..."})} />

//                         <div>
//                             {loading ? <div>Loading ... </div> : null}

//                             {suggestions.map(suggestion => {
//                                 const style = {
//                                     backgroundColor: suggestion.active ? "#565656" : "#fff"
//                                 };

//                                 return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
//                             })}    
//                         </div>
//                     </div>
//                 )}
//             </PlacesAutocomplete>

//         </div>
//     )
// }


// export default function Examples () {

//     const [guestAdult, setGuestAdult] = useState(0);
//     const guestVal = sign => {

//         if (sign === "+") {
//             if (guestAdult < 6) {
//               if (guestAdult >= 0) {
//                 setGuestAdult(preV => preV + 1);
//               }
//             }
//         } else {
//             if (guestAdult > 0) {
//                 setGuestAdult(preV => preV - 1);
//             }
//         }
//         console.log(guestAdult);
//     }

//     return(
//         <>
        
//             <button onClick={() => guestVal("-")}>-</button>
//             <span>{guestAdult}</span>
//             <button onClick={() => guestVal("+")}>+</button>
        
//         </>
//     )
// }


// corosal demo
// import { useState } from "react";
// import v1 from '../img/demo/1.png';
// import v2 from '../img/demo/2.png';
// import v3 from '../img/demo/3.png';
// import SliderCss from '../css/ImageSlider.module.css';

// export default function Examples() {

//     let images = [v1, v2, v3];
//     const [index, setIndex] = useState(0);

//     const slideRight = () => {
//         setIndex((index + 1) % images.length);
//     }

//     const slideLeft = () => {
//         const nextIndex = index - 1;
//         if (nextIndex < 0) {
//             setIndex(images.length - 1);
//         } else {
//             setIndex(nextIndex);
//         }
//     }

//     return (
//         images.length > 0 && (
//             <div className={SliderCss.container}>
//                 <button className={SliderCss.slideLeftBtn} onClick={slideLeft}>{"<"}</button>
//                 <img className={SliderCss.mainImage} src={images[index]} alt="" />
//                 <button className={SliderCss.slideRightBtn} onClick={slideRight}>{">"}</button>
//             </div>
//         )
//     );
// }

// import React, { useRef } from "react";
// import { useHistory } from "react-router-dom"

// export default function Examples() {

//     const history = useHistory();
//     const inpuText = useRef(null);
//     const inpuNum = useRef(null);

//     const submit = () => {
//         if (inpuText.current.value === "") {
//             console.log(inpuText)
//             inpuText.current.style.borderColor = "red";
//             inpuText.current.focus()
//         } else if (inpuNum.current.value === "") {
//             inpuNum.current.focus()
//         } else {
//             console.log(inpuText.current.value);
//             console.log(inpuNum.current.value);
//             history.push("/chats", {text: inpuText.current.value, num: inpuNum.current.value});
//         }
//     }

//     return (
//         <>
//             <div>
//                 <input ref={inpuText} type="text" />
//                 <input ref={inpuNum} type="number" />

//                 <button onClick={submit}>Submit</button>
//             </div>
//         </>
//     )

// }


// disabled dates
// import { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
// export default function Example () {

    
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const selectionRange = {
//         startDate: startDate,
//         endDate: endDate,
//         key: "selection"
//     };

//     function handleDateSelect(ranges) {
//         setStartDate(ranges.selection.startDate);
//         setEndDate(ranges.selection.endDate);
//     }

//     const dates = (sDate, eDate) => {
//         var from;
//         if (sDate === "") {        
//             from = new Date();
//         } else {
//             from = new Date(sDate);
//         }
//         var to = new Date(eDate);
//         const dataArr = [];
            
//         // loop for every day
//         for (var day = from; day <= to; day.setDate(day.getDate() + 1)) {
//             dataArr.push(new Date(day));
//             console.log(new Date(day));
//         }
//         console.log(dataArr);
//         return dataArr;
//     }

//     return(
//         <>
            
//             <DateRangePicker
//                 showSelectionPreview={true}
//                 moveRangeOnFirstSelection={false}
//                 months={2}
//                 direction="horizontal"
//                 ranges={[selectionRange]}
//                 onChange={handleDateSelect}
//                 disabledDates={dates("2021-02-17", "2021-02-18")}
//             />
        
//         </>
//     );
// }

// export default function Example () {

//     const [videoFile, setVideoFile] = useState(null);

//     const setFile = e => {
//         setVideoFile(URL.createObjectURL(e.target.files[0]))
//     }

//     return(
//         <>
        
//             <input type="file" onChange={setFile} /> 
//             <img src={videoFile} alt="" />

//         </>
//     );
// }

// export default function Example () {

//     const [rating, setRating] = useState(1);
//     const r1 = useRef(null);
//     const r2 = useRef(null);
//     const r3 = useRef(null);
//     const r4 = useRef(null);
//     const r5 = useRef(null);
//     const ratingSystem = (e, val) => {
//         setRating(val);
//         r1.current.style.backgroundColor = "white";
//         r2.current.style.backgroundColor = "white";
//         r3.current.style.backgroundColor = "white";
//         r4.current.style.backgroundColor = "white";
//         r5.current.style.backgroundColor = "white";

//         for (var i=1; i<=val; i++) {
//             console.log(i);
//             if (i === 1) {
//                 r1.current.style.backgroundColor = "blue";
//             } else if (i === 2) {
//                 r2.current.style.backgroundColor = "blue";
//             } else if (i === 3) {
//                 r3.current.style.backgroundColor = "blue";
//             } else if (i === 4) {
//                 r4.current.style.backgroundColor = "blue";
//             } else if (i === 5) {
//                 r5.current.style.backgroundColor = "blue";
//             }
//         }
//     }

//     return(
//         <>

//             <div style={{marginTop: "200px", marginLeft: "200px"}}>
//                 <p>{rating}</p><br />
//                 <div>
//                     <button ref={r1} onClick={e => ratingSystem(e, 1)}>1</button>
//                     <button ref={r2} onClick={e => ratingSystem(e, 2)}>2</button>
//                     <button ref={r3} onClick={e => ratingSystem(e, 3)}>3</button>
//                     <button ref={r4} onClick={e => ratingSystem(e, 4)}>4</button>
//                     <button ref={r5} onClick={e => ratingSystem(e, 5)}>5</button>
//                 </div>
//             </div>

//         </>
//     );

// }

// map and places api
// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // for google map places autocomplete
//       address: '',

//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
  
//       mapCenter: {
//         lat: 49.2827291,
//         lng: -123.1207375
//       }
//     };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     this.setState({ address });
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => {
//         console.log('Success', latLng);

//         // update center state
//         this.setState({ mapCenter: latLng });
//       })
//       .catch(error => console.error('Error', error));
//   };
//   render() {
//     return (
//       <div id='googleMaps'>
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: 'Search Places ...',
//                   className: 'location-search-input',
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map(suggestion => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })} 
//                     >
//                         <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>

//         <Map 
//           google={this.props.google}
//           initialCenter={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           center={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           containerStyle={{width: "90%", height: "550px", marginTop: "80px", float: "left", marginLeft: "50%", transform: "translateX(-50%)"}}
//           onClick={e => {
//             console.log(e);
//           }}
//         >
//           <Marker 
//             position={{
//               lat: this.state.mapCenter.lat,
//               lng: this.state.mapCenter.lng
//             }} />
//         </Map>
//       </div>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCELWjaQJp4WrXjAP6W_2q6qLSzY71rcDk")
// })(MapContainer)


// checking server is online or under development
// import url from '../data/urls.json';
// export default function Example () {

//   const [val, setVal] = useState(null);
//   useEffect(() => run(), []);

//   const run = () => {
//     fetch(url.baseUrl+"host", {
//       method: "get",
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//     })
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setVal("Server is online!!!");
//     })
//     .catch(() => {
//       setVal("Server is under development!!!");
//       setInterval(run(), 3000)
//     });
//   }

//   return(
//     <>

//       <div>{val}</div>
    
//     </>
//   );
// }

// multiple image show and delete before upload
// import url from '../data/urls.json';
// export default function Example () {

//   // images
//   // uploaded image list
//   // const [imageList, setImageList] = useState([]);
//   // selected image list
//   const [selectedImage, setSelectedImage] = useState([]);
//   const uploadImageHandler = e => {

//       var formdata = new FormData();
      
//       for(var  j = 0; j < e.target.files.length; j++) {
//         formdata.append("file", e.target.files[j], e.target.files[j].name);
//         console.log("file : ");
//         console.log(e.target.files[j]);
//         console.log("file name : ");
//         console.log(e.target.files[j].name);
//       }

//       // var requestOptions = {
//       // method: 'POST',
//       // body: formdata,
//       // redirect: 'follow'
//       // };

//       // fetch(`${url.baseUrl}/upload`, requestOptions)
//       // .then(response => response.json())
//       // .then(result => {
//       //     var imageLink = result.Data;
//       //     imageLink.map(val => setImageList(prevImg => prevImg.concat(val.Location)));
//       // })
//       // .catch(error => console.log('error', error));
      
  
//       if (e.target.files) {
//         const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file))
//         setSelectedImage(prevImg => prevImg.concat(fileArray))
//         Array.from(e.target.files).map(file => URL.revokeObjectURL(file))
//       }
//   }
//   const deleteImageFromList = (e, index) => {
//     let taskList = [...selectedImage];
//     taskList.splice(index, 1);
//     setSelectedImage(taskList);
//   }
//   return (
//     <>
//       <div>{selectedImage}</div>
//       <input type="file" accept="image/jpg, image/jpeg, image/png" multiple onChange={e => uploadImageHandler(e)} />
//       {/* result */}
//       <div className="uploadedImageCont">
//         {selectedImage.map((photo, index) => {
//             return <div className="uploadedImage" key={index} style={{width: "100px", backgroundColor: "lightgrey", height: "100px", position: "relative"}}><img src={photo} key={photo} alt="" /><div style={{position: "absolute", right: "0", cursor: "pointer"}} onClick={e => deleteImageFromList(e,index)}>X</div></div>
//         })}
//       </div>
//       {selectedImage.length === 0 ? <div>Please Select some images</div> : <div onClick={uploadImages}>Upload image</div>}
//     </>
//   );
// }

// export default function Example () {
//   const [preview, setPreview] = useState({file: null});
//   const fileHandler = event => {
//     for (var i in event.target.files) {
//       setPreview({...preview, file: event.target.files[i]})
//     }
//   };
//   const h = () => {
//     console.log(preview.file[0]);
//   }
//   return (
//       <div>
//           <input type="file" multiple onChange={fileHandler} />
//           <button onClick={h}>show</button>
//       </div>
//   )
// }

// import React from 'react';
// export default class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: '',
//       imagePreviewUrl: ''
//     };
//     this._handleImageChange = this._handleImageChange.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     // TODO: do something with -> this.state.file
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }

//     reader.readAsDataURL(file)
//   }

//   render() {
//     let {imagePreviewUrl} = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = (<img width="200px" src={imagePreviewUrl} />);
//     }

//     return (
//       <div>
//         <form onSubmit={this._handleSubmit}>
//           <input type="file" onChange={this._handleImageChange} multiple />
//           <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
//         </form>
//         {$imagePreview}
//       </div>
//     )
//   }

// }

// import url from '../data/urls.json';
// import FileUploadProgress  from 'react-fileupload-progress';
// export default function Example () {
//   return (
//     <>
//       <div>
//         <h3>Default style</h3>
//         <FileUploadProgress key='ex1' 
//           url={`${url.baseUrl}upload`}
//           method="POST"
//           onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
//           onLoad={ (e, request) => {console.log('load', e, request);}}
//           onError={ (e, request) => {console.log('error', e, request);}}
//           onAbort={ (e, request) => {console.log('abort', e, request);}}
//         />
//       </div>
//     </>
//   );
// }

// import api_k from '../data/api_keys.json'
// import unirest from 'unirest';
// export default function Example () {
//   useEffect(() => {
//     mainUrlCall();
//   }, []);
//   const mainUrlCall = () => {
//     console.log("api calling ...")
//     // fetch("https://www.universal-tutorial.com/api/countries/", {
//     //   method: "GET",
//     //   header: {
//     //     "Authorization": "Bearer "+api_k.countryStateCityTree,
//     //     "Accept": "application/json"
//     //   }
//     // })
//     // .then(res => res.json())
//     // .then(res => console.log(res))
//     // .catch(err => console.log(err)); 

//     var req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");
//     req.headers({
//       "Accept": "application/json",
//       "api-token": api_k.countryStateCityTree,
//       "user-email": "krishnakantvish.24@gmail.com"
//     });
//     console.log(req);
//   }

//   return (
//     <>
    
//       <div>k</div>
    
//     </>
//   );
// }


// google map and search api with markers
// import {GoogleMap, Marker} from '@react-google-maps/api';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete';

// const mapContainerStyle = {
//   width: "900px",
//   height: "600px"
// };
// const option = {
//   disableDefaultUI: true,
//   zoomControl: true
// };

// export default function Example () {

//   const [center, setCenter] = useState({
//     lat: 43,
//     lng: 43
//   });
//   const [address, setAddress] = useState('');
//   const [markers, setMarkers] = useState([]);
//   const onMapClick = useCallback(e => {
//     console.log(e.latLng.lat(), e.latLng.lng())
//     setMarkers([{
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     }]);
//   }, []);
//   const mapRef = useRef();
//   const onMapLoad = useCallback(map => {
//     mapRef.current = map;
//   }, []);
 
//   const handleSelect = async address => {
//     setAddress(address);
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => {
//         setCenter({
//           lat: latLng.lat,
//           lng: latLng.lng
//         });
//         console.log('Success', latLng);
//       })
//       .catch(error => console.error('Error', error));
//   };

//   return (

//     <>

//       <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input {...getInputProps({placeholder: "Search ..."})} />

//             <div>
//                 {loading ? <div>Loading ... </div> : null}

//                 {suggestions.map((suggestion, key) => {
//                     const style = {
//                         backgroundColor: suggestion.active ? "#565656" : "#fff"
//                     };

//                     return <div {...getSuggestionItemProps(suggestion, {style})} key={key}>{suggestion.description}</div>
//                 })}    
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
    
//       <GoogleMap 
//         mapContainerStyle={mapContainerStyle} 
//         zoom={8} 
//         center={center} 
//         options={option}
//         onClick={e => onMapClick(e)}
//         onLoad={onMapLoad}
//       >

//         {markers.map(marker => (<Marker key={marker.lat} position={{lat: marker.lat, lng: marker.lng}} />))}

//       </GoogleMap>
    
//     </>

//   );
// }

// import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

// export default function Example () {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };


// import {CardElement} from '@stripe/react-stripe-js';
// import { useStripe, useElements} from '@stripe/react-stripe-js';

// function check ()  {

// }<CardElement
//   options={{
//     style: {
//       base: {
//         fontSize: '16px',
//         color: '#424770',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
//   }}
// />


// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };


// import S3 from 'react-aws-s3';
// import {uploadFile} from 'react-s3'
// const config = {
//   bucketName: 'checkin-images-upload',
//   region: 'ap-south-1',
//   accessKeyId: 'AKIASYXDSNXSLCU3MSKO',
//   secretAccessKey: '0VlUDSPXcwYyRxFYdtDNsugXDFBQg0N8XCFYrKNA'
// };
// // const ReactS3Client = new S3(config);
// export default function Examples () {

//   const fileInput = useRef();

//   const handleClickUploadImage = e => {
//     e.preventDefault();
//     console.log(fileInput.current);
//     let file = fileInput.current.files[0];
//     // let newFileName = fileInput.current.files[0];
    
//     uploadFile(file, config)
//       .then(d => console.log(d))
//       .catch(e => console.log(e))
//   }

//   return (
//     <>
    
      // <form onSubmit={handleClickUploadImage}>
      //   <input ref={fileInput} type="file" /><br />
      //   <button type="submit">Upload</button>
      // </form>
    
//     </>
//   );
// }

// import StripeCheckout from 'react-stripe-checkout';
// export default function Examples () {
//   const publishKey = 'pk_test_51IU641B0we3rFF4ATyeu6ynAS3VezsJ6FDgUXaxlqrQLMKKjA9d5rPGboWuDPzN7PJND7uuG3jkYD8lgAoewBDtT00eU6MZnNO';
//   const onToken = token => {
//     console.log(token);
//     alert('pay success');
//   }
//   return (
//     <>
//       <div>krishna</div>
//       {/* <StripeCheckout 
//         token={onToken}
//         stripeKey={publishKey}
//       >
//         confirm
//       </StripeCheckout> */}
//     </>
//   );
// }

// export default function Examples () {
//   const [list, updateList] = useState([]);
//   const inputT = useRef(null);
//   const onSubmit = () => {
//     // console.log(inputT.current.value);
//     updateList([...list, inputT.current.value])
//   }
//   const removeItem = index => {
//     // alert(index)
//     const temp = [...list];
//     temp.splice(index, 1);
//     updateList(temp);
//   }
//   useEffect(() => {
//     console.log(list);
//   }, [list]);

//   return(
//     <>
    
//       <input type="text" ref={inputT} />
//       <button onClick={onSubmit}>Click</button>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <ul>
//         {list.map((val, index) => {
//           return (
//             <>
//               <li key={index} onClick={() => removeItem(index)}>{val}</li>
//             </>
//           );
//         })}
//       </ul>

//     </>
//   );
// }


export default function Examples () {

  const arr = [2, 5, 8, 7];

  return (

    <>
      <div>krishna</div>

      {arr
      .filter(item => item > 5)
      .map(item => {
        return<p>{item}</p>
      })}
    
    </>

  );
}