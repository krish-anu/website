export default function ExamCentreDetailsTable({ data, languagePreference }) {
	const columns = ["Center Name (English)", "Center Name (Tamil)"];
	const langKey = languagePreference === "ta" ? "name_ta" : "name_en";

	return (
		<div className="card">
			<div className="header">
				<h3>{data[langKey]}</h3>
				<p>Coordinator: {data.coordinator}</p>
				<p>Contact Number: {data.contact_number}</p>
			</div>
			<div className="centers">
				<h4>Centers</h4>
				{data.centers.map((center, index) => (
					<div key={index} className="center">
						{center[langKey]}
					</div>
				))}
			</div>
		</div>
	);
}
