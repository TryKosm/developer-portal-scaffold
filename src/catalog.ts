export interface Service {
  name: string;
  owner: string;
  tier: "critical" | "standard";
}
