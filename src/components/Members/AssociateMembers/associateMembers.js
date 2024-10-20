const associateMembers = [
    { associateMemberName: "A.N. Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "042 37511421" },
    { associateMemberName: "Ahbab Trading Company", city: "Lahore", castingMaterial: "Material Supplier", phone: "042-7141723" },
    { associateMemberName: "Ahmed Corporation", city: "Lahore", castingMaterial: "SS", phone: "92-42-6669842, 6669843" },
    { associateMemberName: "AMMARIAN Industry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0306-4845574" },
    { associateMemberName: "API Pumps (Pvt) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0321-7439080" },
    { associateMemberName: "Aqeel Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0300-4608810" },
    { associateMemberName: "Ashraf & Sons", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321-7439080" },
    { associateMemberName: "Ashraf Steels Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "0334-4092929" },
    { associateMemberName: "AshTech", city: "Lahore", castingMaterial: "Cast Iron", phone: "0320-5591966" },
    { associateMemberName: "Bajwa Agro Industries (Pvt) Ltd", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-36822327/ 36824541" },
    { associateMemberName: "BLACK GOLD INDUSTRY", city: "Lahore", castingMaterial: "Not specified", phone: "042-36885402" },
    { associateMemberName: "Bolan Castings Limited", city: "Karachi", castingMaterial: "Cast Iron", phone: "0321-4458150" },
    { associateMemberName: "CH. FOUNDRY", city: "Gujranwala", castingMaterial: "Mild Steel, Cast Iron", phone: "0307-2503034" },
    { associateMemberName: "Chenab Engineering Works & Foundries (Pvt) Ltd", city: "Faisalabad", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "041-8751424" },
    { associateMemberName: "Dawood Fabricators", city: "Lahore", castingMaterial: "Mild Steel, Cast Iron", phone: "+92-42-36546902" },
    { associateMemberName: "Eehabs Engineering Company (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-35966721-23" },
    { associateMemberName: "Electro Heat", city: "Not specified", castingMaterial: "Material Supplier", phone: "0300-8442057" },
    { associateMemberName: "EXCEL Engineering (Pvt.) Ltd.", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "+92-42-35155667-9, 37933953" },
    { associateMemberName: "F.F Trading Corporation", city: "Lahore", castingMaterial: "Material Supplier", phone: "92 41 8711114" },
    { associateMemberName: "Friends Foundry & Engineering", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0300-0076892" },
    { associateMemberName: "General Manufacturing Concern", city: "Lahore", castingMaterial: "Cast Iron", phone: "3234903393" },
    { associateMemberName: "Gohar Enterprises (Private) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-36827627-8" },
    { associateMemberName: "Golden Dynamics (Pvt.) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0323-5969000" },
    { associateMemberName: "Golden Pumps (Pvt) Ltd", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0331-7400000" },
    { associateMemberName: "HAFEEZ FOUNDARY WORKS", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "0300-0505123" },
    { associateMemberName: "Inter Link Enterprises", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321-8409795" },
    { associateMemberName: "International Fabrication Company", city: "Lahore", castingMaterial: "Mild Steel, Cast Iron", phone: "+92-300-8451483" },
    { associateMemberName: "KHAMSA FOUNDRY", city: "Gujranwala", castingMaterial: "Mild Steel, Cast Iron", phone: "0331-5128512" },
    { associateMemberName: "Lahore Castings", city: "Lahore", castingMaterial: "Cast Iron, Mild Steel", phone: "03004212184" },
    { associateMemberName: "Liaqat Trading Coproration", city: "Lahore", castingMaterial: "Material Supplier", phone: "0300-8484302" },
    { associateMemberName: "M. Usman & Sons", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-37180441-3" },
    { associateMemberName: "Matchless Engineering (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-36543149, 36557604-5, 36556008" },
    { associateMemberName: "Materials Sourcing International", city: "Karachi", castingMaterial: "Material Supplier", phone: "0300-2875262" },
    { associateMemberName: "Mecas Foundry", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92 42 35299513-15" },
    { associateMemberName: "Mega Green Pvt. Ltd,", city: "Lahore", castingMaterial: "Cast Iron", phone: "0321 4348484" },
    { associateMemberName: "Millat Tractors Pvt Ltd.", city: "Sheikhupura", castingMaterial: "Not specified", phone: "042-37911021-5, 111-200-7" },
    { associateMemberName: "MUGHAL UNION INDUSTRY", city: "Gujranwala", castingMaterial: "Cast Iron, Mild Steel", phone: "0333-8700717" },
    { associateMemberName: "New National Steel Casting", city: "Faisalabad", castingMaterial: "Cast Iron", phone: "0321-9660793" },
    { associateMemberName: "Noor Din Steel Casting", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0300-7425975" },
    { associateMemberName: "ONE LIFE HBS INDUTRIES", city: "Gujranwala", castingMaterial: "Mild Steel, SS", phone: "0307-7272683" },
    { associateMemberName: "Paktherm (Pvt) Ltd.", city: "Not specified", castingMaterial: "Material Supplier", phone: "Not specified" },
    { associateMemberName: "PARAS Engineering Works", city: "Lahore", castingMaterial: "Cast Iron", phone: "+92-42-37071862, 37289783, 36264717" },
    { associateMemberName: "Qadir Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "0302-8445626" },
    { associateMemberName: "Qadri Group Companies (Pvt.) Ltd.", city: "Lahore", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "Not specified" },
    { associateMemberName: "RASHID MUGHAL INDUSTRY", city: "Gujranwala", castingMaterial: "Cast Iron", phone: "Not specified" },
    { associateMemberName: "Ravi Autos (Pvt.) Ltd.", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "042-37920221, 37910780, 37910378" },
    { associateMemberName: "Ravi Spherocast", city: "Sheikhupura", castingMaterial: "Cast Iron", phone: "+92-42-37970474" },
    { associateMemberName: "RAZA BROTHERS", city: "Gujranwala", castingMaterial: "Cast Iron, Mild Steel", phone: "Not specified" },
    { associateMemberName: "Safco", city: "Lahore", castingMaterial: "Cast Iron, Carbon Steel", phone: "042-36311400, 36304291" },
    { associateMemberName: "Shahsons Pakistan (Pvt) Ltd", city: "Multan", castingMaterial: "Cast Iron, Mild Steel", phone: "0302-6789000" },
    { associateMemberName: "Shajarpak (PVT) LTD", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-36285140-5" },
    { associateMemberName: "Steel Casting (Pvt) Ltd.", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0323-3100000" },
    { associateMemberName: "Suleman Machinery Company (Pvt.) Ltd", city: "Gujranwala", castingMaterial: "", phone: "0300-9459041" },
    { associateMemberName: "Supra Steels", city: "Gujranwala", castingMaterial: "Cast Iron, SS, Manganese Steel, Alloys", phone: "0300-8740098" },
    { associateMemberName: "Utopia Industries Pvt. Ltd", city: "Karachi", castingMaterial: "Cast Iron", phone: "" },
    { associateMemberName: "Waqar Usman Auto Engineering", city: "Lahore", castingMaterial: "Cast Iron", phone: "0312-4836465" },
    { associateMemberName: "West Industrial Concern", city: "Lahore", castingMaterial: "Cast Iron, Carbon Steel", phone: "0301-8662993" },
    { associateMemberName: "Zahoor Steel Casting", city: "Lahore", castingMaterial: "Cast Iron, SS, Manganese Steel", phone: "0321-9449077" },
    { associateMemberName: "Zaid Products (Pvt) Ltd.", city: "Lahore", castingMaterial: "Cast Iron", phone: "042-37612242" }



];


export const associateMembersWithId = associateMembers.map((associateMember, index) => ({
    id: index + 1,
    castingMaterial: associateMember.castingMaterial || "Not specified", // Default value for castingMaterial
    phone: associateMember.phone || "Not specified", // Default value for phone
    ...associateMember,
}));

// console.log(associateMembersWithId);