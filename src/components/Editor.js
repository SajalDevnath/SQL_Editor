import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-tomorrow";

const Editor = ({ value, setQuery, setValue }) => {
  const onChange = (newValue) => {
    setValue(newValue);
  };
  //   console.log(value);
  //    const [value,setValue] = useState("")
    const handleClick = (e) => {
      //window.alert();
      const Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
     setQuery(Z.split(" ")[1]);
      console.log(Z);
     // setTableName(Z);
    };

  return (
    <>
      <div className="w-70 p-2">
      <label htmlFor="board">
        <AceEditor
          style={{
            width: "match-parent",
            height: "15rem",
          }}
          className="rounded-lg drop-shadow-sm"
          mode="mysql"
          id="board"
          placeholder="Write your query here"
          theme="tomorrow"
          aria-label="editor"
          name="board"
          editorProps={{ $blockScrolling: true }}
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={value}
          onChange={onChange}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        </label>
      </div>



      <div className="h-10 m-3">
        <button
          className={
            "w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-pulse transition-colors text-white rounded-md font text-md font-semimbold drop-shadow-sm"
          }
          onClick={handleClick}
        >
          <div className="flex flex-row justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Run
          </div>
        </button>
      </div>
    </>
  );
};

export default Editor;
