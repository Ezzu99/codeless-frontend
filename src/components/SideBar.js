import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsPersonCircle, BsPatchCheck, BsFiles, BsPeople } from 'react-icons/bs';

const SideBar = (props) => {
    let fileData = new FormData();
    const [isOpen, setisOpen] = useState(false);
    const [button1, setbutton1] = useState('Next');
    const [button2, setbutton2] = useState('Cancel');
    const [model, setmodel] = useState('1');
    const [modelAccuracy, setmodelAccuracy] = useState(0);
    const [selectedModel, setselectedModel] = useState(1);
    const [selectedType, setselectedType] = useState(1);
    const [selectedFile, setselectedFile] = useState(null);
    const userType = localStorage.getItem('package');
    const userOrFiles = (userType === 'admin') ? "Users" : "Files";
    const adminOrMember = (userType === 'admin') ? "Admin" : `${userType} Member`;

    const [diagTitle, setdiagTitle] = useState("Choose Model");
    const [count, setcount] = useState(0);

    const [title1, settitle1] = useState("Regression");
    const [title2, settitle2] = useState("Classification");
    const [title3, settitle3] = useState("Clustering");
    const [para1, setpara1] = useState("Takes a group of random variables, thought to be predicting Y, and tries to find a mathematical relationship between them. This relationship is typically in the form of a straight line (linear regression) that best approximates all the individual data points");
    const [para2, setpara2] = useState("Process of categorizing a given set of data into classes, It can be performed on both structured or unstructured data. The process starts with predicting the class of given data points. It approximates the mapping function from input variables to discrete output variables");
    const [para3, setpara3] = useState("Involves automatically discovering natural grouping in data. Unlike supervised learning (like predictive modeling), clustering algorithms only interpret the input data and find natural groups or clusters in feature space");

    useEffect(
        () => {
            if (localStorage.getItem('package') === 'admin') {
                document.getElementById('testData')?.classList.add('hidden');
            }

            if (model === 1 && count !== 2) {
                document.getElementById('1').classList.add('border-indigo-600');
                document.getElementById('2').classList.remove('border-indigo-600');
                document.getElementById('3').classList.remove('border-indigo-600');
            }
            else if (model === 2 && count !== 2) {
                document.getElementById('2').classList.add('border-indigo-600');
                document.getElementById('1').classList.remove('border-indigo-600');
                document.getElementById('3').classList.remove('border-indigo-600');
            }
            else if (model === 3 && count !== 2) {
                document.getElementById('3').classList.add('border-indigo-600');
                document.getElementById('1').classList.remove('border-indigo-600');
                document.getElementById('2').classList.remove('border-indigo-600');
            }
            else if (count === 2) {
                document.getElementById('modelButtons').classList.add('hidden');
                document.getElementById('modelFile').classList.remove('hidden');
            }
            
            if (count === 3 || count === 5) {
                document.getElementById('modelFile').classList.add('hidden');
                document.getElementById('spinner').classList.remove('hidden');
                document.getElementById('next').classList.add('hidden');
            }

            if (count === 4) {
                document.getElementById('modelFile').classList.remove('hidden');
                document.getElementById('spinner').classList.add('hidden');
                document.getElementById('next').classList.remove('hidden');
            }

            if (count === 6) {
                document.getElementById('spinner').classList.add('hidden');
            }

            if ((userType === 'premium' && props.length > 18) || (userType === 'deluxe' && props.length > 12) || (userType === 'basic' && props.length > 6)) {
                document.getElementById('testData').classList.remove('from-indigo-400', 'to-indigo-600');
                document.getElementById('testData').classList.add('from-red-400', 'to-red-600', 'pointer-events-none');
            }
            else {
                document.getElementById('testData').classList.remove('from-red-400', 'to-red-600', 'pointer-events-none');
                document.getElementById('testData').classList.add('from-indigo-400', 'to-indigo-600');
            }

            if (!selectedFile && (count === 2 || count === 4)) {
                document.getElementById('next').classList.remove('bg-indigo-600');
                document.getElementById('next').classList.add('bg-gray-400', 'pointer-events-none');
            }
            else if (selectedFile && (count === 2 || count === 4)) {
                document.getElementById('next').classList.remove('bg-gray-400', 'pointer-events-none');
                document.getElementById('next').classList.add('bg-indigo-600');
            }
        }, [model, count, selectedFile]
    )

    return (
        <>
            <div className="w-80 h-full border-r-2 bg-gradient-to-t from-transparent via-white to-white flex flex-col relative z-10">
                <div className="h-24 px-7 flex flex-row items-center justify-start">
                    {
                        (props.data[0]) ?
                        <BsPersonCircle className="w-12 h-12 bg-white rounded-full text-indigo-300" /> :
                        <BsPersonCircle className="w-12 h-12 bg-white rounded-full text-indigo-300 animate-pulse" />
                    }
                    {
                        (props.data[0]) ?
                        <div className="px-3 flex flex-col">
                            <p className="text-gray-600 font-bold">{props.data[0].name}</p>
                            <p className="text-gray-500 transform -translate-y-1">{props.data[0].username}</p>
                        </div> :
                        <div className="flex-grow pr-3">
                            <div className="w-full h-10 mx-3 bg-gray-300 opacity-100 rounded-md animate-pulse"></div>
                        </div>
                    }
                </div>
                {
                    (props.data[0]) ?
                    <button id="testData" className="mb-3 mx-7 py-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-md text-white tracking-wider hover:shadow-lg transition-all" onClick={() => setisOpen(true)}>Test Data</button> :
                    <div id="testData" className="h-10 mb-3 mx-7 py-2 bg-gray-300 opacity-70 rounded-md animate-pulse"></div>
                }
                <div className="px-7">
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center"><BsPatchCheck className="w-5 h-5 mr-2 bg-white" />
                        {
                            (props.data[0]) ?
                            <p>{adminOrMember}</p> :
                            <div className="w-52 h-6 bg-gray-300 opacity-50 rounded-md animate-pulse"></div>
                        }
                    </span>
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center">{(userType === 'admin') ? <BsPeople className="w-5 h-5 mr-2 bg-white" /> : <BsFiles className="w-5 h-5 mr-2 bg-white" />}
                        {
                            (props.data[0]) ?
                            <p>{props.length}{' '}{userOrFiles}</p> :
                            <div className="w-52 h-6 bg-gray-300 opacity-30 rounded-md animate-pulse"></div>
                        }
                    </span>
                </div>
            </div>
            <div className="w-80 mx-2 h-full bgPattern absolute top-0 left-0 z-0"></div>
            {
                (isOpen) ?
                <div className="w-screen h-screen bg-gray-700 bg-opacity-30 backdrop-filter flex items-center justify-center absolute top-0 left-0 z-50">
                    <div className="w-3/5 px-5 py-4 bg-white rounded-lg shadow-2xl flex flex-col">
                        <div className="flex flex-row items-center justify-start">
                            <h1 className="text-gray-600 text-xl font-bold">{diagTitle}{(modelAccuracy != 0) ? ` | Model Accuracy: ${modelAccuracy}%` : null}</h1>
                        </div>
                        <div id="modelButtons" className="mt-4 flex flex-row items-stretch justify-between">
                            <button id="1" className="w-1/3 min-h-full mr-1 px-3 py-2 border-2 rounded-md flex flex-col items-start justify-start overflow-y-auto" onClick={() => setmodel(1)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title1}</h1>
                                <p className="text-gray-600 text-left">{para1}</p>
                            </button>
                            <button id="2" className="w-1/3 min-h-full mx-1 px-3 py-2 border-2 rounded-md flex flex-col items-start justify-start" onClick={() => setmodel(2)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title2}</h1>
                                <p className="text-gray-600 text-left">{para2}</p>
                            </button>
                            <button id="3" className="w-1/3 min-h-full ml-1 px-3 py-2 border-2 rounded-md flex flex-col items-start justify-start" onClick={() => setmodel(3)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title3}</h1>
                                <p className="text-gray-600 text-left">{para3}</p>
                            </button>
                        </div>
                        <div id="modelFile" className="hidden mt-4">
                            <input type="file" multiple={false} accept=".csv" onChange={(event) => {
                                if (event.target.files[0] && (event.target.files[0].type === 'text/csv' || event.target.files[0].type === 'application/vnd.ms-excel' || event.target.files[0].type === 'text/comma-separated-values' || event.target.files[0].type === 'application/csv' || event.target.files[0].type === 'application/excel' || event.target.files[0].type === 'application/vnd.msexcel')) {
                                    setselectedFile(event.target.files[0]);
                                }
                                else {
                                    setselectedFile(null);
                                    alert("LOL, Please upload a .csv file!");
                                    return;
                                }
                                if ((props.data[0]?.package === 'free' && event.target.files[0]?.size > 2000000) || (props.data[0]?.package === 'deluxe' && event.target.files[0]?.size > 4000000) || (props.data[0]?.package === 'premium' && event.target.files[0]?.size > 10000000)) {
                                    setselectedFile(null);
                                    alert(`File size limit exceeded! File size should be less than ${(props.data[0]?.package === 'free') ? "2MB" : (props.data[0]?.package === 'deluxe') ? "4MB" : "10MB"}!`);
                                    return;
                                }
                            }} />
                        </div>
                        <div className="flex items-center justify-center">
                            <div id="spinner" className="w-28 h-28 mt-4 bg-no-repeat bg-center bg-contain spinnerSVG hidden animate-spin"></div>
                        </div>
                        <div className="h-full mt-3 flex flex-row items-center justify-end">
                            <button className="ml-2 px-5 py-2 bg-gray-400 text-white rounded-md"
                                onClick={() => {
                                    setisOpen(false);
                                    setmodel('1');
                                    setcount(0);
                                    setmodelAccuracy(0);
                                    setbutton1('Next');
                                    setbutton2('Cancel');
                                    setselectedFile(null);
                                    setdiagTitle("Choose Model");
                                    settitle1("Regression");
                                    settitle2("Classification");
                                    settitle3("Clustering");
                                    setpara1("Takes a group of random variables, thought to be predicting Y, and tries to find a mathematical relationship between them. This relationship is typically in the form of a straight line (linear regression) that best approximates all the individual data points.");
                                    setpara2("Process of categorizing a given setpara of data into classes, It can be performed on both structured or unstructured data. The process starts with predicting the class of given data points. It approximates the mapping function from input variables to discrete output variables.");
                                    setpara3("Involves automatically discovering natural grouping in data. Unlike supervised learning (like predictive modeling), clustering algorithms only interpret the input data and find natural groups or clusters in feature space.");
                                    props.handleCount();
                                }}
                            >{button2}</button>
                            <button id="next" className="ml-2 px-5 py-2 bg-indigo-600 text-white rounded-md"
                                onClick={
                                    (model === 1 && count === 0) ? 
                                    () => {
                                        setcount(1);
                                        setselectedModel(1);
                                        setdiagTitle("Choose Type");
                                        settitle1("Linear");
                                        settitle2("Multiple");
                                        settitle3("Support Vector Machine");
                                        setpara1("It is the supervised Machine Learning model in which the model finds the best fit linear line between the dependent and independent variables.");
                                        setpara2("It is an extension of simple linear regression. It is used when we want to predict the value of a variable based on the value of two or more other variables.");
                                        setpara3("It constructs a hyperplane or set of hyperplanes in a high- or infinite-dimensional space, which can be used for classification, regression, or other tasks like outliers detection.");
                                    } :
                                    (model === 2 && count === 0) ?
                                    () => {
                                        setcount(1);
                                        setselectedModel(2);
                                        setdiagTitle("Choose Type");
                                        settitle1("K-Nearest Neighbour");
                                        settitle2("Naive Bayes");
                                        settitle3("Decision Tree Classifier");
                                        setpara1("It is an algorithm that stores all available cases and classifies new cases based on similar measure.");
                                        setpara2("It is a simple technique for constructing classifiers: models that assign class labels to problem instances, represented as vectors of feature values, where the class labels are drawn from some finite set.");
                                        setpara3("It uses a decision tree (as a predictive model) to go from observations about an item (represented in the branches) to conclusions about the item's target value (represented in the leaves).");
                                    } :
                                    (model === 3 && count === 0) ?
                                    () => {
                                        setcount(1);
                                        setselectedModel(3);
                                        setdiagTitle("Choose Type");
                                        settitle1("Density Based");
                                        settitle2("Eclat");
                                        settitle3("K-Mean");
                                        setpara1("It is a density-based clustering non-parametric algorithm: given a set of points in some space, it groups together points that are closely packed together, marking as outliers points that lie alone in low-density regions.");
                                        setpara2("It is an algorithm for finding frequent item sets in a transaction or database. Eclat algorithm uses a Depth first search for discovering frequent item sets.");
                                        setpara3("It is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster.");
                                    } :
                                    (model === 1 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(1);
                                        setdiagTitle("Upload File");
                                    } :
                                    (model === 2 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(2);
                                        setdiagTitle("Upload File");
                                    } :
                                    (model === 3 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(3);
                                        setdiagTitle("Upload File");
                                    } :
                                    (count === 2) ?
                                    () => {
                                        setcount(3);
                                        setbutton1('Test data');
                                        setdiagTitle("Training Model");
                                        fileData.append('file', selectedFile);
                                        fileData.append('choice', selectedModel);
                                        fileData.append('fname', selectedFile.name);
                                        if (selectedModel === 1) {
                                            if (selectedType === 1) fileData.append('type', 'Regression-Linear');
                                            else if (selectedType === 2) fileData.append('type', 'Regression-Multiple');
                                            else fileData.append('type', 'Regression-SVM');
                                        }
                                        else if (selectedModel === 2) {
                                            if (selectedType === 1) fileData.append('type', 'Classification-KNN');
                                            else if (selectedType === 2) fileData.append('type', 'Classification-Naive_Bayes');
                                            else fileData.append('type', 'Classification-DTC');
                                        }
                                        else {
                                            if (selectedType === 1) fileData.append('type', 'Clustering-Density_Based');
                                            else if (selectedType === 2) fileData.append('type', 'Clustering-Eclat');
                                            else fileData.append('type', 'Clustering-K_Mean');
                                        }
                                        console.log(fileData);
                                        console.log(selectedFile);
                                        axios.post (
                                            'http://127.0.0.1:8000/auth/upload/',
                                            fileData,
                                            {
                                                headers: {
                                                    "Content-Type": 'multipart/form-data',
                                                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                                                }
                                            }
                                        ).then(res => {
                                            console.log(res);
                                            setmodelAccuracy(parseFloat(res.data).toFixed(1));
                                            setcount(4);
                                            setdiagTitle("Upload Test File");
                                        }).catch(err => {
                                            console.log(err);
                                            alert("Unable to train model");
                                        })
                                    } :
                                    (count === 4) ?
                                    () => {
                                        setcount(5);
                                        setdiagTitle("Testing File");
                                        setmodelAccuracy(0);
                                        fileData.append('file', selectedFile);
                                        // const secondpass=true;
                                        fileData.append('choice', '4');
                                        fileData.append('fname', selectedFile.name);
                                        if (selectedModel === 1) {
                                            if (selectedType === 1) fileData.append('type', 'Regression-Linear');
                                            else if (selectedType === 2) fileData.append('type', 'Regression-Multiple');
                                            else fileData.append('type', 'Regression-SVM');
                                        }
                                        else if (selectedModel === 2) {
                                            if (selectedType === 1) fileData.append('type', 'Classification-KNN');
                                            else if (selectedType === 2) fileData.append('type', 'Classification-Naive_Bayes');
                                            else fileData.append('type', 'Classification-DTC');
                                        }
                                        else {
                                            if (selectedType === 1) fileData.append('type', 'Clustering-Density_Based');
                                            else if (selectedType === 2) fileData.append('type', 'Clustering-Eclat');
                                            else fileData.append('type', 'Clustering-K_Mean');
                                        }
                                        axios.post (
                                            'http://127.0.0.1:8000/auth/upload/',
                                            fileData,
                                            {
                                                headers: {
                                                    "Content-Type": 'multipart/form-data',
                                                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                                                }
                                            }
                                        ).then(res => {
                                            console.log(res);
                                            setbutton2('Exit'); // move these lines to .then
                                            setcount(6);
                                            setdiagTitle("File Successfully Tested");
                                            props.handleCount();
                                        }).catch(err => {
                                            console.log(err);
                                            setbutton2('Exit');
                                            alert('Unable to test file!');
                                        })
                                    } : null
                                }
                            >{button1}</button>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default SideBar;