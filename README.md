# Sean CV

Today we are going to build a CV system for Sean using:
- GitHub
- Decap CMS
- Astro
- Tailwind

The CV will have very simple styling, the existing CV is pretty much just a black and white list of tables. The focus here is not on aesthetics, but on setting up a very simple system that allows Sean to add and edit content.

## About Sean

You can find the text content for the CV at ./docs/existing-cv.txt. There are other files in here that include images of Sean's certifications.

## Document Structure

1. Cover letter (currently a PNG, converted back to text at docs/cover-letter.txt)
2. Title page including a photo of Sean
3. PERSONAL PARTICULARS 
4. QUALIFICATIONS 
5. EMPLOYMENT HISTORY
6. List of certificate images

## CMS Structure

- Collection: Qualifications
- Collection: Employment History
- Collection: Certificates
- Settings: Personal Particulars, image, title

## DNS

The app will be hosted at sean.vos.cv.ferma.in

I own ferma.in and control DNS.

## Hosting

Static GH Pages hosting with ci build.

## Styling

Very simple. Plain, printable.

## Steps

- [ ] Setup a latest astro project
- [ ] Configure tailwind 4
- [ ] Setup Decap CMS with local backend
- [ ] Setup GitHub Actions CI
- [ ] Setup GH Pages