import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { FC, useState } from "react";

interface EditorProps {
    value: string;
    name: string;
    onChange: (value: any) => void;
}





const editorConfiguration = {
    toolbar: {
        items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "undo",
            "redo",
        ],
    },
};


const Editor: FC<EditorProps> = ({ value, onChange, name }) => {

    return (
        <CKEditor
            config={editorConfiguration}


            editor={ClassicEditor}
            data={value}

            onChange={(event, editor) => {
                const data = editor.getData();
                const newEvent = {
                    target: {
                        name,
                        value: data
                    }
                }
                onChange(newEvent);
            }}
        />
    );
};

export default Editor;
