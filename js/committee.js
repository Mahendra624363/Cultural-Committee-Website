// Array of dictionaries containing member details
const members = [
    {
        path:"../Images/People/kishore.jpg",
        name: "Dr. P. Samatha Chowdary",
        designation: "Associate Professor",
        department: "CE",
        detailsLink: "http://ce.rvrjcce.ac.in/faculty/psc.php"
    },
    {
        name: "Mr. J. Ranga Raya Chowdary",
        designation: "Asst. Prof",
        department: "ME",
        detailsLink: "http://me.rvrjcce.ac.in/faculty/26.%20JRC.pdf"
    },
    {
        name: "Dr. P. Rohini Kumar",
        designation: "Associate Professor",
        department: "ChE",
        detailsLink: "https://che.rvrjc.ac.in/prk.html"
    },
    {
        name: "Dr. M. Anitha",
        designation: "Associate Professor",
        department: "EEE",
        detailsLink: "https://www.rvrjcce.ac.in/Electrical/faculty/Anitha_CV.pdf"
    },
    {
        name: "Mrs. M. Sunitha",
        designation: "Assistant Professor",
        department: "ECE",
        detailsLink: "http://ece.rvrjcce.ac.in/facultyprofile.php"
    },
    {
        name: "Mrs. M. Vasavi",
        designation: "Assistant Professor",
        department: "CSE",
        detailsLink: "http://cse.rvrjcce.ac.in/faculty/mv.php"
    },
    {
        name: "Mrs. K. Venkata Anusha",
        designation: "Assistant Professor",
        department: "CSE (AI & ML)",
        detailsLink: "http://csm.rvrjcce.ac.in/kva.php"
    },
    {
        name: "Mr. P. Srinivasa Rao",
        designation: "Assistant Professor",
        department: "CSE (DS)",
        detailsLink: "http://csd.rvrjcce.ac.in/psrao.php"
    },
    {
        name: "Dr. A. Yaswanth Kumar",
        designation: "Associate Professor",
        department: "IT",
        detailsLink: "http://it.rvrjcce.ac.in/faculty/ayk.php"
    },
    {
        name: "Mr. P. Siddhardha",
        designation: "Assistant Professor",
        department: "MBA",
        detailsLink: "http://mnh.rvrjcce.ac.in/faculty/siddhardha.php"
    },
    {
        name: "Mrs. V. Sujatha Lakshmi",
        designation: "Assistant Professor",
        department: "MCA",
        detailsLink: "http://ca.rvrjcce.ac.in/faculty/vsl.php"
    },
    {
        name: "Mr. Sreeram Nimmagadda",
        designation: "Assistant Professor",
        department: "Physics",
        detailsLink: "https://physics.rvrjc.ac.in/faculty/sriramnimmagadda.php"
    },
    {
        name: "Dr. N. Phani Pooja",
        designation: "Assistant Professor",
        department: "English",
        detailsLink: "http://mnh.rvrjcce.ac.in/faculty/npp.php"
    },
    {
        name: "Dr. D. Rajani",
        designation: "Associate Professor",
        department: "English",
        detailsLink: "http://mnh.rvrjcce.ac.in/faculty/rajani.php"
    },
    {
        name: "Mrs. Ch. Vijaya Lakshmi",
        designation: "Assistant Professor (Pro term)",
        department: "CSE",
        detailsLink: "http://cse.rvrjcce.ac.in/faculty/cvml.php"
    },
    {
        name: "Smt. P. Vanisree",
        designation: "Sr.Tech-A",
        department: "ECE",
        detailsLink: ""
    },
    {
        name: "Mr. G. R. N. Chowdary",
        designation: "Tech-B",
        department: "ME",
        detailsLink: "http://me.rvrjcce.ac.in/faculty/jrrc.php"
    },
    {
        name: "Mr. G. S. Prasad",
        designation: "Tech-B",
        department: "ECE",
        detailsLink: ""
    },
    {
        name: "Sri V. Mastan Rao",
        designation: "Tech-B",
        department: "EEE",
        detailsLink: "details/v-mastan-rao"
    },
    {
        name: "Sri B. N. Chandrasekhar",
        designation: "Hardware Tech.",
        department: "IT",
        detailsLink: "details/bn-chandrasekhar"
    },
    {
        name: "Sri A. Sambasiva Rao",
        designation: "Jr. Asst.",
        department: "Office",
        detailsLink: "http://it.rvrjcce.ac.in/faculty/asr.php"
    },
    {
        name: "Sri K. Hari Babu",
        designation: "Sr. Asst.",
        department: "Office",
        detailsLink: "details/k-hari-babu"
    },
    {
        name: "Mr. P. Hidayathulla",
        designation: "Sr. Asst.",
        department: "Office",
        detailsLink: "details/p-hidayathulla"
    }
];

function generateMembersHTML(members) {
    const container = document.querySelector('.committee-members');
    container.innerHTML = ''; 

    members.forEach(member => {
        const memberHTML = `
            <div class="member">
                <div class="details">
                    <div class="name">${member.name}</div>
                    <div class="designation">${member.designation}</div>
                    <div class="department">${member.department}</div>
                    <div class="role">Member</div>
                    <div class="more-details"><a href="${member.detailsLink}">More Details</a></div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', memberHTML);
    });
}

generateMembersHTML(members);
