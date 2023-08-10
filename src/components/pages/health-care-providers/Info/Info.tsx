'use client'
// components
import { Accordion } from '@/components/common'

const column1 = [
  {
    title: 'Flexible physician journey',
    description:
      'The test can be ordered and interpreted remotely or in-person by a healthcare provider',
  },
  {
    title: 'Flexible patient journey',
    description:
      'Patients can give their blood sample in the comfort and privacy of their home, or have it collected at the healthcare provider’s office.',
  },
  {
    title: 'High sensitivity',
    description:
      'Evidence-based test shown to correctly identify >70% of events with no bias between men and women',
  },
  {
    title: 'Informative',
    description:
      'Each test report is tailored to each patient’s unique biological risk',
  },
  {
    title: 'Compliance',
    description:
      'The test is performed in a high complexity CLIA certified lab',
  },
  {
    title: 'Dynamic',
    description:
      'Epigenetic profiles can change with lifestyle changes and treatment, which may serve as a metric to measure the effect of changes of health behaviors on risk over time',
  },
  {
    title: 'Objective',
    description:
      'It is a standalone test without need for patient self-report, assessment of vital signs, or input of lipid variables.',
  },
  {
    title: 'Integrable',
    description:
      'The results of Epi+Gen CHD™ can be used with other tests to effectively guide heart disease prevention.',
  },
  {
    title: 'Convenience',
    description: 'No fasting or special preparation needed',
  },
  {
    title: 'No radiation',
    description:
      'This test does not expose potentially vulnerable patients to ionizing radiation',
  },
  {
    title: 'Near-term risk',
    description:
      'Three-year risk assessment, as opposed to the conventional 10-year assessment.',
  },
]

const column2 = [
  {
    title: 'Who is the test appropriate for?',
    description:
      'The test was validated in patients over the age of 35 who did not have coronary heart disease (CHD). The test is useful for screening patients for risk of CHD, but not for other cardiac conditions such as arrhythmia, heart failure, or aneurysm.',
  },
  {
    title: 'What are the results from the Epi+Gen CHD™ test?',
    description:
      'The current output from the test is the 3-year risk of symptomatic CHD characterized as low, intermediate, or high.',
  },
  {
    title: 'Who receives a copy of the results?',
    description:
      'If the physician requests the test, the results are sent directly to the physician for disclosure to the patient. If a patient initiates the request for the test through our web portal and requests a telemedicine visit, a copy of the results is released to them by their telemedicine physician.',
  },
  {
    title: 'What is the turnaround time?',
    description:
      'Currently, the test results from our CLIA certified laboratory are returned approximately 7-10 business days after receipt of the sample in the lab.',
  },
  {
    title: 'How does the test work?',
    description:
      'The test (patent pending) measures DNA methylation status at 3 loci and genotype at 5 loci. Then, an artificial intelligence guided algorithm interprets the results of the DNA methylation contextually with respect to the genetic variation. This approach allows us to interpret epigenetic signatures that would otherwise be confounded by background genetic variation. Similar approaches are being used by other epigenetically based tests such as Cologuard®.',
  },
  {
    title:
      'What are the advantages of the test as compared to standard lipid profile-based approaches?',
    description:
      'The test is approximately twice as sensitive for CHD related events over the 3-year risk window as conventional risk calculators (Framingham Risk Score and ASCVD Risk Calculator). In addition, the content available on our web portal provides guidance for addressing other risk factors for myocardial infarction such as serum cholesterol levels.',
  },
  {
    title: 'Can I preorder an inventory of tests for my office?',
    description:
      'Yes. To do so, please email customer service at support@cardiodiagnosticsinc.com and tell them whether you desire the finger lancet or venipuncture based collection kits. The collection tubes from both kits are shelf stable.',
  },
  {
    title: 'Where can I go to learn more about the test?',
    description:
      'The scientific premise for the test was described in “Integrated genetic and epigenetic prediction of coronary heart disease in the Framingham Heart Study”. The description of the test validation was presented at the 2020 American Heart Association Meeting in Phoenix and the paper detailing the test is under review at a leading journal. In addition, the company regularly hosts webinars discussing the technology. If you would like our medical director to contact you directly, please email the request to support@cardiodiagnosticsinc.com along with your contact information.',
  },
  {
    title: 'Can I still order a traditional lipid profile panel?',
    description:
      'Yes. Our results can easily be supplemented with the results from the Framingham Risk Score and the ASCVD Pooled Cohort Equation risk estimators. Because Epi+Gen CHD™ is much more sensitive to the onset of CHD, it is quite possible our test will indicate increased risk in those individuals thought to be at low risk according to these conventional risk calculators, or occasionally, vice versa. In those cases with discrepant results, we suggest erroring on the side of caution since the onset of CHD can be fatal.',
  },
  {
    title: 'What do I do if the test comes back with an elevated risk score?',
    description:
      'We highly recommend following the American Heart Association Guidelines which include considering secondary testing, the encouragement of lifestyle changes, and use of statins.',
  },
  {
    title: 'When should the test be repeated?',
    description:
      'Within three years. The updated methylation values may show the change in incident CHD risk since the prior evaluation.',
  },
]

export const Info = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="w-full flex flex-wrap justify-between gap-7">
          <div className="flex flex-col w-full lg:w-[36.7%] gap-7">
            {column1.map((el, i) => (
              <Accordion
                key={i}
                title={el.title}
                classname="py-4 px-5 border border solid border-[#d9d9d9]"
                animate={(open) => ({
                  backgroundColor: open ? '#fff' : '#f4f4f4',
                })}
              >
                <p className="pt-5">{el.description}</p>
              </Accordion>
            ))}
          </div>
          <div className="flex flex-col lg:w-[57.8%] gap-7">
            {column2.map((el, i) => (
              <Accordion
                key={i}
                title={el.title}
                classname="py-4 px-5 border border solid border-[#d9d9d9]"
                animate={(open) => ({
                  backgroundColor: open ? '#fff' : '#f4f4f4',
                })}
              >
                <p className="pt-5">{el.description}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
