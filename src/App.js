import React, { useState } from "react";
import { PDFDocument } from "pdf-lib"; // For PDF parsing
import mammoth from "mammoth"; // For DOCX parsing
import { motion } from "framer-motion"; 
import "./App.css"; 

function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [matchScore, setMatchScore] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file.type === "application/pdf") {
      const text = await extractPDFText(file);
      setResumeText(text);
    } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const text = await extractDOCXText(file);
      setResumeText(text);
    } else {
      alert("Only PDF or DOCX files are supported.");
    }
  };

  const extractPDFText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    let text = "";
    const pages = pdfDoc.getPages();
    for (const page of pages) {
      const pageText = await page.getTextContent();
      text += pageText.items.map((item) => item.str).join(" ");
    }
    return text;
  };

  const extractDOCXText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  const calculateMatch = () => {
    const jobKeywords = extractKeywords(jobDescription);
    const resumeKeywords = extractKeywords(resumeText);

    const matchedKeywords = jobKeywords.filter((word) =>
      resumeKeywords.includes(word)
    );

    const matchPercentage = (
      (matchedKeywords.length / jobKeywords.length) *
      99.99
    ).toFixed(2);

    setMatchScore(matchPercentage);

    const highlighted = resumeKeywords
      .map((word) =>
        jobKeywords.includes(word)
          ? `<span class="highlight">${word}</span>`
          : word
      )
      .join(" ");
    setHighlightedText(highlighted);
  };

  const extractKeywords = (text) => {
    return text
      .toLowerCase()
      .match(/\b\w+\b/g)
      ?.filter((word) => word.length > 2) || [];
  };

  return (
    <motion.div
      className="ats-matcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="title">JobMatch</h1>
      <textarea
        className="input-textarea"
        placeholder="Paste Job Description Here"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={6}
        cols={50}
      ></textarea>
      <br />
      <motion.div
        className="file-upload-container"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="file" onChange={handleFileUpload} className="file-upload" />
        <button
          className="compare-button"
          onClick={calculateMatch}
          disabled={!resumeText || !jobDescription}
        >
          Compare
        </button>
      </motion.div>
      {matchScore !== null && (
        <motion.div
          className="results-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="match-score">Match Score: {matchScore}%</h2>
          <h3>Highlighted Resume:</h3>
          <p
            className="highlighted-text"
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          ></p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;

