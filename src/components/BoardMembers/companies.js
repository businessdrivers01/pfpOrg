const companies = [
    { companyName: "A.N. Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "042 37511421" },
    { companyName: "Ahbab Trading Company", city: "Lahore", castingMaterial: "Material Supplier", phone: "042-7141723" },
    { companyName: "Ahmed Corporation", city: "Lahore", castingMaterial: "SS", phone: "92-42-6669842, 6669843" },
    { companyName: "AMMARIAN Industry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0306-4845574" },
    { companyName: "API Pumps (Pvt) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0321-7439080" },
    { companyName: "Aqeel Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0300-4608810" },
    { companyName: "Ashraf & Sons", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321-7439080" },
    { companyName: "Ashraf Steels Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0334-4092929" },
    { companyName: "AshTech", city: "Lahore", castingMaterial: "Cast Iron", phone: "0320-5591966" },
    { companyName: "Bajwa Agro Industries (Pvt) Ltd", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-36822327/ 36824541" },
    { companyName: "BLACK GOLD INDUSTRY", city: "Lahore", castingMaterial: "Not specified", phone: "042-36885402" },
    { companyName: "Bolan Castings Limited", city: "Karachi", castingMaterial: "Cast Iron", phone: "0321-4458150" },
    { companyName: "CH. FOUNDRY", city: "Gujranwala", castingMaterial: "Mild Steel, Cast Iron", phone: "0307-2503034" },
    { companyName: "Chenab Engineering Works & Foundries (Pvt) Ltd", city: "Faisalabad", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "041-8751424" },
    { companyName: "Dawood Fabricators", city: "Lahore", castingMaterial: "Mild Steel, Cast Iron", phone: "+92-42-36546902" },
    { companyName: "Eehabs Engineering Company (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-35966721-23" },
    { companyName: "Electro Heat", city: "Not specified", castingMaterial: "Material Supplier", phone: "0300-8442057" },
    { companyName: "EXCEL Engineering (Pvt.) Ltd.", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "+92-42-35155667-9, 37933953" },
    { companyName: "F.F Trading Corporation", city: "Lahore", castingMaterial: "Material Supplier", phone: "92 41 8711114" },
    { companyName: "Friends Foundry & Engineering", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0300-0076892" },
    { companyName: "General Manufacturing Concern", city: "Lahore", castingMaterial: "Cast Iron", phone: "3234903393" },
    { companyName: "Gohar Enterprises (Private) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-36827627-8" },
    { companyName: "Golden Dynamics (Pvt.) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0323-5969000" },
    { companyName: "Golden Pumps (Pvt) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0331-7400000" },
    { companyName: "HAFEEZ FOUNDARY WORKS", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0300-0505123" },
    { companyName: "Inter Link Enterprises", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321-8409795" },
    { companyName: "International Fabrication Company", city: "Lahore", castingMaterial: "Mild Steel, Cast Iron", phone: "+92-300-8451483" },
    { companyName: "KHAMSA FOUNDRY", city: "Gujranwala", castingMaterial: "Mild Steel, Cast Iron", phone: "0331-5128512" },
    { companyName: "Lahore Castings", city: "Lahore", castingMaterial: "Cast Iron, Mild Steel", phone: "03004212184" },
    { companyName: "Liaqat Trading Coproration", city: "Lahore", castingMaterial: "Material Supplier", phone: "0300-8484302" },
    { companyName: "M. Usman & Sons", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-37180441-3" },
    { companyName: "Matchless Engineering (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-36543149, 36557604-5, 36556008" },
    { companyName: "Materials Sourcing International", city: "Karachi", castingMaterial: "Material Supplier", phone: "0300-2875262" },
    { companyName: "Mecas Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92 42 35299513-15" },
    { companyName: "Mega Green Pvt. Ltd,", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321 4348484" },
    { companyName: "Millat Tractors Pvt Ltd.", city: "Sheikhupura", castingMaterial: "Not specified", phone: "042-37911021-5, 111-200-7" },
    { companyName: "MUGHAL UNION INDUSTRY", city: "Gujranwala", castingMaterial: "Cast Iron, Mild Steel", phone: "0333-8700717" },
    { companyName: "New National Steel Casting", city: "Faisalabad", castingMaterial: "Cast Iron", phone: "0321-9660793" },
    { companyName: "Noor Din Steel Casting", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0300-7425975" },
    { companyName: "ONE LIFE HBS INDUTRIES", city: "Gujranwala", castingMaterial: "Mild Steel, SS", phone: "0307-7272683" },
    { companyName: "Paktherm (Pvt) Ltd.", city: "Not specified", castingMaterial: "Material Supplier", phone: "Not specified" },
    { companyName: "PARAS Engineering Works", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-37071862, 37289783, 36264717" },
    { companyName: "Qadir Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "0302-8445626" },
    { companyName: "Qadri Group Companies (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "Not specified" },
    { companyName: "RASHID MUGHAL INDUSTRY", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "Not specified" },
    { companyName: "Ravi Autos (Pvt.) Ltd.", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "042-37920221, 37910780, 37910378" },
    { companyName: "Ravi Spherocast", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "+92-42-37970474" },
    { companyName: "RAZA BROTHERS", city: "Gujranwala", castingMaterial: "Cast Iron, Mild Steel", phone: "Not specified" },
    { companyName: "Safco", city: "Lahore", castingMaterial: "Cast Iron, Carbon Steel", phone: "042-36311400, 36304291" },
    { companyName: "Shahsons Pakistan (Pvt) Ltd", city: "Multan", castingMaterial: "Cast Iron, Mild Steel", phone: "0302-6789000" },

    { companyName: "Shajarpak (PVT) LTD", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-36285140-5" },
    { companyName: "Steel Casting (Pvt) Ltd.", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0323-3100000" },
    { companyName: "Suleman Machinery Company (Pvt.) Ltd", city: "Gujranwala", castingMaterial: "", phone: "0300-9459041" },
    { companyName: "Supra Steels", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0300-8740098" },
    { companyName: "Utopia Industries Pvt. Ltd", city: "Karachi", castingMaterial: "Cast Iron", phone: "" },
    { companyName: "Waqar Usman Auto Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "0312-4836465" },
    { companyName: "West Industrial Concern", city: "Lahore", castingMaterial: "Cast Iron, Carbon Steel", phone: "0301-8662993" },
    { companyName: "Zahoor Steel Casting", city: "Lahore", castingMaterial: "Cast Iron, SS, Manganese Steel", phone: "0321-9449077" },
    { companyName: "Zaid Products (Pvt) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-37612242" }



];


export const companiesWithId = companies.map((company, index) => ({
    id: index + 1,
    castingMaterial: company.castingMaterial || "Not specified", // Default value for castingMaterial
    phone: company.phone || "Not specified", // Default value for phone
    ...company,
}));

// console.log(companiesWithId);