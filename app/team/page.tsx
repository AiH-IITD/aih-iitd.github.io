import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import peopleData from "@/lib/people.json";

// Define a type for all possible fields in a person/alumni
interface TeamPerson {
  name: string;
  title?: string;
  role?: string;
  interests?: string;
  start?: string;
  note?: string;
  first_employment?: string;
  year?: string;
}

const groupOrder = [
  { key: "principal_investigator", label: "Principal Investigator" },
  { key: "external_faculty_collaborators", label: "External Faculty Collaborators" },
  { key: "phd_students", label: "PhD Students" },
  { key: "masters_students", label: "Masters Students" },
  { key: "btech_students", label: "B.Tech Students" },
  { key: "research_assistants", label: "Research Assistants" },
  { key: "interns", label: "Interns" },
  { key: "external_student_collaborators", label: "External Student Collaborators" },
  { key: "staff", label: "Staff" },
];

const alumniOrder = [
  { key: "postdocs", label: "Alumni: PostDocs" },
  { key: "phd", label: "Alumni: PhD" },
  { key: "masters", label: "Alumni: Masters" },
  { key: "research_assistants", label: "Alumni: Research Assistants" },
  { key: "btech", label: "Alumni: B.Tech" },
  { key: "intern_ra", label: "Alumni: Intern/RA" },
];

// Omit 'alumni' from peopleData for the main groups, using unknown to avoid 'any'
const { alumni: alumniRaw, ...mainPeople } = peopleData as unknown as { [key: string]: TeamPerson[] } & { alumni?: Record<string, TeamPerson[]> };
const people = mainPeople as Record<string, TeamPerson[]>;
const alumni = (alumniRaw ?? {}) as Record<string, TeamPerson[]>;

function getImageForPerson(person: TeamPerson) {
  return "/images/logo.png";
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the people driving innovation in AI healthcare.
          </p>
        </div>
        {groupOrder.map(({ key, label }) =>
          Array.isArray(people[key]) && people[key].length > 0 ? (
            <section key={key} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{label}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {people[key].map((person: TeamPerson, idx: number) => (
                  <Card className="border-0 shadow-sm text-center" key={idx}>
                    <CardHeader>
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Image
                          src={getImageForPerson(person)}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="rounded-full"
                        />
                      </div>
                      <CardTitle className="text-xl">{person.name}</CardTitle>
                      <CardDescription>
                        {person.title || person.role || ""}
                        {person.start && (
                          <span className="block text-xs text-gray-400">Started: {person.start}</span>
                        )}
                        {person.note && (
                          <span className="block text-xs text-yellow-700">{person.note}</span>
                        )}
                        {person.first_employment && (
                          <span className="block text-xs text-gray-500">{person.first_employment}</span>
                        )}
                        {person.year && (
                          <span className="block text-xs text-gray-400">({person.year})</span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {person.interests && (
                        <p className="text-sm text-gray-600 mb-2">{person.interests}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ) : null
        )}
        {/* Alumni sections */}
        {alumniOrder.map(({ key, label }) =>
          Array.isArray(alumni[key]) && alumni[key].length > 0 ? (
            <section key={key} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{label}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumni[key].map((alumnus: TeamPerson, idx: number) => (
                  <Card className="border-0 shadow-sm text-center" key={idx}>
                    <CardHeader>
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Image
                          src={getImageForPerson(alumnus)}
                          alt={alumnus.name}
                          width={96}
                          height={96}
                          className="rounded-full"
                        />
                      </div>
                      <CardTitle className="text-xl">{alumnus.name}</CardTitle>
                      <CardDescription>
                        {alumnus.title || alumnus.role || ""}
                        {alumnus.start && (
                          <span className="block text-xs text-gray-400">Started: {alumnus.start}</span>
                        )}
                        {alumnus.note && (
                          <span className="block text-xs text-yellow-700">{alumnus.note}</span>
                        )}
                        {alumnus.first_employment && (
                          <span className="block text-xs text-gray-500">{alumnus.first_employment}</span>
                        )}
                        {alumnus.year && (
                          <span className="block text-xs text-gray-400">({alumnus.year})</span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {alumnus.interests && (
                        <p className="text-sm text-gray-600 mb-2">{alumnus.interests}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ) : null
        )}
      </div>
    </main>
  );
} 