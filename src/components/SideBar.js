import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsPersonCircle, BsPatchCheck, BsFiles, BsPeople } from 'react-icons/bs';

const SideBar = (props) => {
    let fileData = new FormData();
    const [isOpen, setisOpen] = useState(false);
    const [button1, setbutton1] = useState('Next');
    const [model, setmodel] = useState('1');
    const [selectedModel, setselectedModel] = useState(0);
    const [selectedType, setselectedType] = useState(0);
    const [selectedFile, setselectedFile] = useState(null);
    const userType = localStorage.getItem('package');
    const userOrFiles = (localStorage.getItem('package') === 'admin') ? "Users" : "Files";
    const adminOrMember = (localStorage.getItem('package') === 'admin') ? "Admin" : `${props.data[0]?.package} Member`;

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
            
            if (count === 3) {
                document.getElementById('modelFile').classList.add('hidden');
                document.getElementById('spinner').classList.remove('hidden');
            }

            if (!selectedFile && count === 2) {
                document.getElementById('next').classList.remove('bg-indigo-600');
                document.getElementById('next').classList.add('bg-gray-400', 'pointer-events-none');
            }
            else if (selectedFile && count === 2) {
                document.getElementById('next').classList.remove('bg-gray-400', 'pointer-events-none');
                document.getElementById('next').classList.add('bg-indigo-600');
            }
        }, [model, count, selectedFile]
    )

    return (
        <>
            <div className="w-72 h-full border-r-2 bg-gradient-to-t from-transparent via-white to-white flex flex-col relative z-10">
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
            <div className="w-72 h-full bgPattern absolute top-0 left-0 z-0"></div>
            {
                (isOpen) ?
                <div className="w-screen h-screen bg-gray-700 bg-opacity-40 backdrop-filter backdrop-blur-sm flex items-center justify-center absolute top-0 left-0 z-50">
                    <div className="w-3/5 px-5 py-4 bg-white border-2 rounded-xl flex flex-col">
                        <div className="flex flex-row items-center justify-start">
                            <h1 className="text-gray-600 text-xl font-bold">{diagTitle}</h1>
                        </div>
                        <div id="modelButtons" className="mt-4 flex flex-row items-stretch justify-between">
                            <button id="1" className="w-1/3 min-h-full mx-1 px-3 py-2 border-2 rounded-lg flex flex-col items-start justify-start overflow-y-auto" onClick={() => setmodel(1)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title1}</h1>
                                <p className="text-gray-600 text-left">{para1}</p>
                            </button>
                            <button id="2" className="w-1/3 min-h-full mx-1 px-3 py-2 border-2 rounded-lg flex flex-col items-start justify-start" onClick={() => setmodel(2)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title2}</h1>
                                <p className="text-gray-600 text-left">{para2}</p>
                            </button>
                            <button id="3" className="w-1/3 min-h-full mx-1 px-3 py-2 border-2 rounded-lg flex flex-col items-start justify-start" onClick={() => setmodel(3)}>
                                <h1 className="text-left text-gray-600 text-lg font-bold">{title3}</h1>
                                <p className="text-gray-600 text-left">{para3}</p>
                            </button>
                        </div>
                        <div id="modelFile" className="hidden mt-4">
                            <input type="file" multiple={false} accept=".csv" onChange={(event) => {
                                setselectedFile(event.target.files[0]);
                                fileData.append('file', event.target.files[0]);
                                console.log(fileData);
                            }} />
                        </div>
                        <div className="flex items-center justify-center">
                            <div id="spinner" className="w-28 h-28 mt-4 bg-no-repeat bg-center bg-contain spinnerSVG hidden animate-spin"></div>
                        </div>
                        <div className="h-full mt-3 flex flex-row items-center justify-end">
                            <button className="ml-2 px-2 py-1 bg-gray-400 text-white rounded-md"
                                onClick={() => {
                                    setisOpen(false);
                                    setmodel('1');
                                    setcount(0);
                                    setbutton1('Next');
                                    setselectedFile(null);
                                    setdiagTitle("Choose Model");
                                    settitle1("Regression");
                                    settitle2("Classification");
                                    settitle3("Clustering");
                                    setpara1("Takes a group of random variables, thought to be predicting Y, and tries to find a mathematical relationship between them. This relationship is typically in the form of a straight line (linear regression) that best approximates all the individual data points");
                                    setpara2("Process of categorizing a given setpara of data into classes, It can be performed on both structured or unstructured data. The process starts with predicting the class of given data points. It approximates the mapping function from input variables to discrete output variables");
                                    setpara3("Involves automatically discovering natural grouping in data. Unlike supervised learning (like predictive modeling), clustering algorithms only interpret the input data and find natural groups or clusters in feature space");
                                }}
                            >Cancel</button>
                            <button id="next" className="ml-2 px-2 py-1 bg-indigo-600 text-white rounded-md"
                                onClick={
                                    (model === 1 && count === 0) ? 
                                    () => {
                                        setcount(1);
                                        setselectedModel(0);
                                        setdiagTitle("Choose Type");
                                        settitle1("Logistic");
                                        settitle2("Linear");
                                        settitle3("Polynomial");
                                        setpara1("It is the appropriate regression analysis to conduct when the dependent variable is dichotomous (binary).  Like all regression analyses, the logistic regression is a predictive analysis");
                                        setpara2("It is the supervised Machine Learning model in which the model finds the best fit linear line between the dependent and independent variables");
                                        setpara3("It is a form of linear regression in which the relationship between the independent variable x and dependent variable y is modelded as an nth degree polynomial");
                                    } :
                                    (model === 2 && count === 0) ?
                                    () => {
                                        setcount(1);
                                        setselectedModel(1);
                                        setdiagTitle("Choose Type");
                                        settitle1("Logistic");
                                        settitle2("K-Nearest Neighbour");
                                        settitle3("Support Vector Machine");
                                        setpara1("In feugiat massa lacus, eget tristique dolor lobortis eu. Morbi non nulla a libero laoreet luctus sit amet id lacus. Donec suscipit est vel nibh");
                                        setpara2("It is an algorithm that stores all available cases and classifies new cases based on similar measure");
                                        setpara3("It is the classification algorithm consisting of many decision trees");
                                    } :
                                    (model === 3 && count === 0) ?
                                    () => {
                                        setcount(1);
                                        setselectedModel(2);
                                        setdiagTitle("Choose Type");
                                        settitle1("Hierarical");
                                        settitle2("Diverse Hiererical");
                                        settitle3("Agglomerative");
                                        setpara1("It is the binary classification model in which output variable is assumes to be equal to a linear combination of the input variables, transformed by the logistic function");
                                        setpara2("It is also known as top-down approach. This algorithm does not require to pre-specify the number of clusters");
                                        setpara3("A structure that is more informative than the unstructured set of clusters returned by flat clustering. This clustering algorithm does not require us to pre-specify the number of clusters");
                                    } :
                                    (model === 1 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(0);
                                        setdiagTitle("Upload File");
                                    } :
                                    (model === 2 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(1);
                                        setdiagTitle("Upload File");
                                    } :
                                    (model === 3 && count === 1) ?
                                    () => {
                                        setcount(2);
                                        setbutton1('Train model');
                                        setselectedType(2);
                                        setdiagTitle("Upload File");
                                    } :
                                    (count === 2) ?
                                    () => {
                                        setcount(3);
                                        setbutton1('Test data');
                                        setdiagTitle("Training Model");
                                        console.log(fileData);
                                        console.log(selectedFile);
                                        axios.post (
                                            'https://v2.convertapi.commmmmmmm/upload',
                                            { fileData },
                                            {
                                                headers: {
                                                    'Accept': 'image/png',
                                                    'content-type': 'image/png'
                                                }
                                            }
                                        ).then(res => {
                                            console.log(res)
                                        }).catch(err => {
                                            console.log(err)
                                        })
                                    } :
                                    (count === 3) ?
                                    () => {
                                    } : null
                                }
                            >{button1}</button>
                        </div>
                    </div>
                </div> :
                null
            }
        </>
    )
}

export default SideBar;