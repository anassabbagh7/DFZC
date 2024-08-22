TopHeader = document.getElementById("Top_Header");
But = document.getElementById("TopButton");

FZA = new CountUp("FZA", 0, 11);
FZ = new CountUp("FZ", 0, 27);
DE = new CountUp("DE", 0, 38);
DFT = new CountUp("DFT", 0, 40);
DL = new CountUp("DL", 0, 500);
WF = new CountUp("WF", 0, 100);

Members = [
  {
    ID: 1,
    Name: "H.H. Sheikh Ahmed Bin Saeed Al Maktoum",
    Position: "Chairman, Dubai Free Zones Council",
    Quote:
      "The Dubai Free Zones Council (DFZC) aims to drive the development of free zones in Dubai in order to attract investments and create an enabling environment for boosting diverse areas of the national",
  },
  {
    ID: 2,
    Name: "His Excellency Dr. Mohammed Alzarooni",
    Position: "Executive Chairman of Dubai Integrated Economic Zones Authority",
    Quote:
      "The Dubai Free Zones Council (DFZC) aims to drive the development of free zones in Dubai in order to attract investments and create an enabling environment for boosting diverse areas of the national",
  },
  {
    ID: 3,
    Name: "Ahmed Bin Sulayem",
    Position:
      "Executive Chairman and Chief Executive Officer Dubai Multi Commodities Center",
    Quote:
      "Ahmed Bin Sulayem is the Executive Chairman and Chief Executive Officer of DMCC and has driven its growth from a start-up of 28 member companies in 2003 to the world’s leading free zone in 2023 with 24,000+ member companies from 180 countries, employing over 80,000 people.",
  },
  {
    ID: 4,
    Name: "His Excellency Dawoud Abdulrahman Alhajri",
    Position: " Directo General Dubai Municipality",
    Quote:
      "His Excellency Dawoud Al Hajri is the Director General of Dubai Municipality since 2018, his multiple missions include supervising the urban plan of the Emirate of Dubai",
  },

  {
    ID: 5,
    Name: "His Excellency Essa Abdulfattah Kazim",
    Position: "Governor of DIFC",
    Quote:
      "His Excellency Essa Kazim is the Governor of Dubai International Financial Centre (DIFC), Chairman of Borse Dubai, Deputy Chairman of Supreme Legislation Committee in Dubai, and Member of the Securities and Exchange Higher Committee and Dubai Supreme Fiscal Committee.",
  },
  {
    ID: 6,
    Name: "His Excellency Helal Saeed Almarri",
    Position: "Director General of the Dubai World Trade Centre",
    Quote:
      "His Excellency Helal Saeed Almarri is the Director General of the Dubai Department of Economy and Tourism. He is a member of the Executive Council of Dubai, a member of the Board of Directors of the Investment Corporation of Dubai and also the Director General of the Dubai World Trade Centre Authority (DWTCA).",
  },
  {
    ID: 7,
    Name: "His Excellency Ibrahim Mohammed BuMelha",
    Position:
      "Vice-Chairman of the Board of Directors of the International Humanitarian City",
    Quote:
      "Other Positions:<br>• Advisor to His Highness Sheikh Mohammed Bin Rashid Al Maktoum for Cultural and Humanitarian Affairs<br>• The Vice-Chairman of the Board of Trustees of the Mohammed Bin Rashid Al Maktoum Humanitarian Charity Establishment",
  },
  {
    ID: 8,
    Name: "His Excellency Khalifa Al Zaffin",
    Position:
      "Executive chairman dubai aviation city corporation and dubai south",
    Quote:
      "Khalifa Al Zaffin is the Executive Chairman of Dubai Aviation City Corporation (DACC), a government of Dubai entity formulated to cement the emirate’s leading position as a logistics and aviation hub.",
  },
  {
    ID: 9,
    Name: "His Excellency Mohammad Ali Rashed Lootah",
    Position: "President & cEO Dubai chambers",
    Quote:
      "Mohammad Ali Rashed Lootah is the President & CEO of Dubai Chambers, one of the largest",
  },
  {
    ID: 10,
    Name: "His Excellency Mohammed Ibrahim Al Shaibani",
    Position: "Chairman of the Board & CEO - Meydan City Corporation",
    Quote:
      "Mohammed Ibrahim Al-Shaibani is the Director General of H.H. The Dubai Ruler’s Court, and Managing Director of the Investment Corporation of Dubai, the principal investment arm of the government of Dubai. He is also the Vice Chairman of the Supreme Fiscal Committee of Dubai which oversees the Emirate’s fiscal policies, and is a member of Dubai’s Executive Council",
  },
  {
    ID: 11,
    Name: "Sultan Bin Sulayem",
    Position:
      "Group Chairman and Chief Executive Officer of DP World and the Chairman of the Ports",
    Quote:
      "Mr. Bin Sulayem’s expertise and visionary leadership spearheaded the rapid expansion of Dubai’s infrastructure, including ports and free zones, contributing significantly to the stellar growth trajectory of the United Arab Emirates. He was also a leader in developing the infrastructure supporting Dubai’s successful tourism industry, among various other sectors.",
  },
  {
    ID: 12,
    Name: "His Excellency Lieutenant General Talal Humaid Belhoul",
    Position: "Director General State Security - Dubai",
    Quote: "The Dubai Free Zones Council (DFZC)",
  },
  {
    ID: 13,
    Name: "His Excellency Malik Al Malik",
    Position: "Director General of the Dubai Development Authority",
    Quote:
      "TECOM Group’s portfolio of successful business communities include Dubai Internet City, Dubai Media City, Dubai Knowledge Park, Dubai Design District, Dubai Industrial Park, Dubai Outsource City, Dubai International Academic City, Dubai Studio City, Dubai Production City, Dubai Science Park and Emirates Towers District.",
  },
  {
    ID: 14,
    Name: "Her Excellency Reem Al Hashimy",
    Position:
      "UAE Minister of State for International Cooperation and CEO, Expo City Dubai Authority",
    Quote:
      "Having previously served as Director General of Expo 2020 Dubai, Her Excellency now holds the post of CEO, Expo City Dubai Authority, the public authority charged with overseeing the development of Expo City Dubai, the World Expo’s legacy city.",
  },
];
function MembersData() {
  for (let i = 0; i < Members.length; i++) {
    document.getElementById("Member_Name_" + Members[i].ID).innerHTML =
      Members[i].Name;
    document.getElementById("Member_Position_" + Members[i].ID).innerHTML =
      Members[i].Position;
    document.getElementById("Member_Quote_" + Members[i].ID).innerHTML =
      Members[i].Quote;
  }
}
MembersData();

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    TopHeader.style.top = "-140px";
    TopHeader.style.transition = "0.3s ease-in-out";
  } else {
    TopHeader.style.top = "0";
    TopHeader.style.transition = "0.3s ease-in-out";
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 500
  ) {
    But.style.display = "flex";
    But.style.justifyContent = "center";
    But.style.alignItems = "center";
  } else {
    But.style.display = "none";
  }
}
function GoToTop() {
  document.documentElement.scrollTop = 0;
}

FZA.start();
FZ.start();
DE.start();
DFT.start();
DL.start();
WF.start();

let asd = document.getElementById("asd").style.offsetWidth;
console.log(asd);