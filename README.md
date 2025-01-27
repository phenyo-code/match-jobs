# JobMatch - ATS Job Matcher

## Description
JobMatch is an innovative web application designed to help job seekers and employers compare resumes to job descriptions. It allows users to upload their resumes (in PDF or DOCX format) and paste job descriptions to calculate a match score based on keyword overlap. The app highlights matching keywords in the resume, offering a simple yet powerful way to determine how well a resume aligns with a specific job description.

## Why? 
In today’s competitive job market, crafting a resume tailored to a job description can be a tedious and time-consuming task. Many job seekers often wonder if their resume is well-optimized for a specific job posting, and whether they are missing any essential keywords. 
- For job seekers, it provides a quick and reliable way to ensure their resume is in alignment with the job requirements.
- For employers or hiring managers, it helps speed up the recruitment process by giving a quick overview of how well candidates’ resumes match the job description.

By automating the comparison process and highlighting the most relevant keywords, JobMatch allows both job seekers and employers to save time and make smarter decisions.

## Quick Start

### Prerequisites
Before starting the project, make sure you have the following tools installed on your machine:
- **Node.js** (version >= 14.x.x)
- **npm** or **yarn**

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jobmatch.git

2. Navigate to the project directory:

```bash
cd jobmatch

3. Install the required dependencies:

```bash
npm install
or if you're using yarn:

```bash
yarn install
Start the development server:

```bash
npm start
or if you're using yarn:

```bash
yarn start

4. Open your browser and navigate to http://localhost:3000 to use the application.

## Usage

Paste the Job Description: Paste the text of a job description into the provided text area.
Upload your Resume: Click the "Choose File" button to upload your resume in either PDF or DOCX format.
Click 'Compare': Once both the job description and resume are ready, click the "Compare" button.
View Results: After a brief processing time, the match score will be displayed along with highlighted keywords that match between the job description and your resume.
The match score indicates how well the keywords in your resume match those in the job description. The highlighted text helps you identify areas for improvement.

## Contributing
Contributions to JobMatch are welcome! To contribute:

## Fork this repository.

### Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request to the main repository.
Please ensure that your code adheres to the project's coding standards, and write tests if applicable.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
PDF-lib: Used for extracting text from PDF files.
Mammoth: Used for extracting text from DOCX files.
Framer Motion: Used for animations to enhance the user experience.   
