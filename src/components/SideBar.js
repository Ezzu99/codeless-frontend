import React, { useEffect, useState } from "react";
import { BsPersonCircle, BsPatchCheck, BsFiles, BsPeople } from 'react-icons/bs';

const SideBar = (props) => {
    const [isOpen, setisOpen] = useState(false);
    const [model, setmodel] = useState('1');
    const [selectedModel, setselectedModel] = useState(0);
    const [selectedType, setselectedType] = useState(0);
    const userType = localStorage.getItem('userType');
    const userOrFiles = (userType === 'admin') ? "Users" : "Files";
    const adminOrMember = (userType === 'admin') ? "Admin" : `${props.member} Member`;

    const [modelType, setmodelType] = useState("Model");
    const [count, setcount] = useState(0);

    const [title1, settitle1] = useState("Regression");
    const [title2, settitle2] = useState("Classification");
    const [title3, settitle3] = useState("Clustering");
    const [para1, setpara1] = useState("Takes a group of random variables, thought to be predicting Y, and tries to find a mathematical relationship between them. This relationship is typically in the form of a straight line (linear regression) that best approximates all the individual data points");
    const [para2, setpara2] = useState("Process of categorizing a given set of data into classes, It can be performed on both structured or unstructured data. The process starts with predicting the class of given data points. It approximates the mapping function from input variables to discrete output variables");
    const [para3, setpara3] = useState("Involves automatically discovering natural grouping in data. Unlike supervised learning (like predictive modeling), clustering algorithms only interpret the input data and find natural groups or clusters in feature space");

    useEffect(
        () => {
            if (model === 1 && count !== 3) {
                document.getElementById('1').classList.add('border-indigo-600');
                document.getElementById('2').classList.remove('border-indigo-600');
                document.getElementById('3').classList.remove('border-indigo-600');
            }
            else if (model === 2 && count !== 3) {
                document.getElementById('2').classList.add('border-indigo-600');
                document.getElementById('1').classList.remove('border-indigo-600');
                document.getElementById('3').classList.remove('border-indigo-600');
            }
            else if (model === 3 && count !== 3) {
                document.getElementById('3').classList.add('border-indigo-600');
                document.getElementById('1').classList.remove('border-indigo-600');
                document.getElementById('2').classList.remove('border-indigo-600');
            }
            else if (count === 3) {
                document.getElementById('modelButtons').classList.add('hidden');
                document.getElementById('modelFile').classList.remove('hidden');
            }
        }, [model, count]
    )

    return (
        <>
            <div className="w-72 h-full border-r-2 bg-gradient-to-t from-transparent via-white to-white flex flex-col relative z-10">
                <div className="h-24 px-7 flex flex-row items-center justify-start">
                    <BsPersonCircle className="w-12 h-12 bg-white rounded-full text-indigo-300" />
                    <div className="px-3 flex flex-col">
                        <p className="text-gray-600 font-bold">Ezaan Ali</p>
                        <p className="text-gray-500 transform -translate-y-1">ezaan1999</p>
                    </div>
                </div>
                <button className="mx-7 py-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-md text-white tracking-wider hover:shadow-lg transition-all" onClick={() => setisOpen(true)}>Test Data</button>
                <div className="mt-6 px-7">
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center"><BsPatchCheck className="w-5 h-5 mr-2 bg-white" />{adminOrMember}</span>
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center">{(userType === 'admin') ? <BsPeople className="w-5 h-5 mr-2 bg-white" /> : <BsFiles className="w-5 h-5 mr-2 bg-white" />}{props.length}{' '}{userOrFiles}</span>
                </div>
            </div>
            <div className="w-72 h-full bgPattern absolute top-0 left-0 z-0"></div>
            {
                (isOpen) ?
                <div className="w-screen h-screen bg-gray-700 bg-opacity-40 backdrop-filter backdrop-blur-sm flex items-center justify-center absolute top-0 left-0 z-50">
                    <div className="w-3/5 px-5 py-4 bg-white border-2 rounded-xl flex flex-col">
                        <div className="flex flex-row items-center justify-start">
                            <h1 className="text-gray-600 text-xl font-bold">Choose {modelType}</h1>
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
                            <input type="file" multiple="false" accept=".csv" />
                        </div>
                        <div className="h-full mt-3 flex flex-row items-center justify-end">
                            <button className="ml-2 px-2 py-1 bg-gray-400 text-white rounded-md"
                                onClick={() => {
                                    setisOpen(false);
                                    setmodel('1');
                                    setcount(0);
                                    setmodelType("Model");
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
                                        setmodelType("Type");
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
                                        setmodelType("Type");
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
                                        setmodelType("Type");
                                        settitle1("Hierarical");
                                        settitle2("Diverse Hiererical");
                                        settitle3("Agglomerative");
                                        setpara1("It is the binary classification model in which output variable is assumes to be equal to a linear combination of the input variables, transformed by the logistic function");
                                        setpara2("It is also known as top-down approach. This algorithm does not require to pre-specify the number of clusters");
                                        setpara3("A structure that is more informative than the unstructured set of clusters returned by flat clustering. This clustering algorithm does not require us to pre-specify the number of clusters");
                                    } :
                                    (model === 1 && count === 1) ?
                                    () => {
                                        setcount(3);
                                        setselectedType(0);
                                        setmodelType("File");
                                    } :
                                    (model === 2 && count === 1) ?
                                    () => {
                                        setcount(3);
                                        setselectedType(1);
                                        setmodelType("File");
                                    } :
                                    (model === 3 && count === 1) ?
                                    () => {
                                        setcount(3);
                                        setselectedType(2);
                                        setmodelType("File");
                                    } : null
                                }
                            >Next</button>
                        </div>
                    </div>
                </div> :
                null
            }
        </>
    )
}

export default SideBar;