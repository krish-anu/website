/**
 * @typedef Props
 * @prop {typeof import("../../EXAM_CENTRES.json")["districts"][number]} data
 * @prop {"ta" | "en"} languagePreference
 */

/**
 * @param {Props} props
 */
export function ExamCentreDetailsTable(props) {
	const { data: districtInfo, languagePreference } = props;
	const columns = ["Center Name (English)", "Center Name (Tamil)"];
	const langKey = languagePreference === "ta" ? "name_ta" : "name_en";
	console.log(districtInfo);

	const areCoordinatorsExamCentreSpecific =
		typeof districtInfo.coordinators == "undefined";

	return (
		<div>
			<div>
				<h3 className="text-4xl mb-4">{districtInfo[langKey]}</h3>
				<p>
					{areCoordinatorsExamCentreSpecific ? (
						"Exam coordinators are specific to the exam centres."
					) : (
						<>
							{districtInfo.coordinators.length == 1
								? "District Coordinator"
								: "District Coordinators"}
							<br />
							{districtInfo.coordinators.map((coordinator, i) => {
								return (
									<span key={coordinator.name_en}>
										<b>{coordinator.name_en}</b> ({coordinator.contact_number})
										{i == districtInfo.coordinators.length - 1 ? null : ", "}
									</span>
								);
							})}
						</>
					)}
				</p>
			</div>
			<div className="mt-5">
				<ul className="list-none m-0 p-0 grid gap-y-2 lg:gap-y-4 gap-x-2 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
					{districtInfo.centers.map((centre, index) => (
						<ExamCentreDetails
							key={centre.name_en}
							centre={centre}
							languagePreference={languagePreference}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

/**
 * @typedef ExamCentreDetails_Props
 * @prop {typeof import("../../EXAM_CENTRES.json")["districts"][number]["centers"][number]} centre
 * @prop {"ta" | "en"} languagePreference
 */

/**
 * @param {ExamCentreDetails_Props} props
 */
function ExamCentreDetails(props) {
	const { centre, languagePreference } = props;
	const langKey = languagePreference === "ta" ? "name_ta" : "name_en";

	return (
		<li key={centre.name_en} className="w-fit">
			<h4 className="my-0 text-lg lg:text-xl">{centre[langKey]}</h4>
			{/* @ts-ignore */}
			{typeof centre.coordinator == "undefined" ? null : (
				<p className="mt-2">
					{/* @ts-ignore */}
					<b>{centre.coordinator.name_en}</b> ({/* @ts-ignore */}
					{centre.coordinator.contact_number})
				</p>
			)}
		</li>
	);
}
