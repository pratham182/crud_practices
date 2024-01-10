import React, { useState } from "react";
import { plus } from '@heroicons/react/outline';

const Notes = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState(""); // title
  const [notes, setNotes] = useState([]);

  // actual content
  const [newNoteContent, setNewNoteContent] = useState("");
  const [notesContent, setNotesContent] = useState([]);

  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputChangeTitle = (e) => {
    setNewNoteTitle(e.target.value);
  };

  const handleInputChangeContent = (e) => {
    setNewNoteContent(e.target.value);
  };

  const handleSubmit = (e) => {
    if(newNoteTitle!="" && newNoteContent!=""){
    e.preventDefault();
    setNotes([...notes, newNoteTitle]);
    setNotesContent([...notesContent, newNoteContent]);
    setNewNoteTitle("");
    setNewNoteContent("");
    setIsInputVisible(false);}
    else{
      e.preventDefault();
      alert("Enter it correctlly");
      setIsInputVisible(true);
    }
  };

  return (
    <>
      <div className="flex w-full text-end m-2">
        <div className="flex-1">
          <h4 className="sm:text-base md:text-lg lg:text-xl xl:text-2xl">My notes</h4>
        </div>
        <div className="flex-1 text-end mr-5">
          <button onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

          {isInputVisible && (
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
              <form onSubmit={handleSubmit} className="p-4 bg-white grid gap-4">
                <input
                  type="text"
                  placeholder="Enter title..."
                  value={newNoteTitle}
                  onChange={handleInputChangeTitle}
                  className="p-2 border border-gray-300 w-full"
                  maxLength={10}
                />
                <textarea
                  placeholder="Enter the notes detail..."
                  value={newNoteContent}
                  onChange={handleInputChangeContent}
                  className="p-2 border border-gray-300 h-40 w-full resize-none"
                  maxLength={100}
                  minLength={50}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h5 className="text-lg font-semibold">Submitted Notes:</h5>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{note}</div>
                    <p className="text-gray-700 text-base">{notesContent[index]}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Notes;
