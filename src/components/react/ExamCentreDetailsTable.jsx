/**
 * @typedef Props
 * @prop {typeof import("../../EXAM_CENTRES.json")["districts"][number]} data
 * @prop {"ta" | "en"} languagePreference
 */

/**
 * @param {Props} props
 */
export function ExamCentreDetailsTable(props) {
	const { data, languagePreference } = props;
	const columns = ["Center Name (English)", "Center Name (Tamil)"];
	const langKey = languagePreference === "ta" ? "name_ta" : "name_en";
	console.log(data);

	const areCoordinatorsExamCentreSpecific =
		typeof data.coordinators == "undefined";

	return (
		<div className="card">
			<div className="header">
				<h3>{data[langKey]}</h3>
				{areCoordinatorsExamCentreSpecific ? null : (
					<p>
						{data.coordinators.length == 1 ? "Coordinator" : "Coordinators"}:{" "}
						{data.coordinators.map((coordinator) => {
							return (
								<span key={coordinator.name_en}>
									<b>{coordinator.name_en}</b> ({coordinator.contact_number}),{" "}
								</span>
							);
						})}
					</p>
				)}
			</div>
			<div className="centers">
				<h4>Centers</h4>
				<ul>
					{data.centers.map((center, index) => (
						<li key={center.name_en} className="center">
							{center[langKey]}{" "}
							{!areCoordinatorsExamCentreSpecific ? null : (
								<>
									- {center.coordinator.name_en} (
									{center.coordinator.contact_number})
								</>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
