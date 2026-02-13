

interface CreateSubscriberRequest {
  email: string,
  groups?: string[],
  firstname?: string,
  lastname?: string,
  fields?: { [key: string]: any };
  phone?: string,
  trigger_automation?: boolean
}

class SenderApiService {
  private readonly baseUrl: string;
  private readonly headers: { [key: string]: string };

  constructor(private token: string = "") {
    this.baseUrl = "https://api.sender.net/v2/";
    this.headers = {
      "Authorization": `Bearer ${this.token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
  }

  // public async createSubscriber(request: CreateSubscriberRequest): Promise<any> {
  //   const response = await fetch(`${this.baseUrl}/subscribers`, {
  //     method: "POST",
  //     headers: this.headers,
  //     body: JSON.stringify(request)
  //   });
  //
  //   return response.json();
  // }
  //


  public async createSubscriber(request: CreateSubscriberRequest): Promise<any> {
    const response = await fetch(`${this.baseUrl}/subscribers`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(request)
    });

    return response.json();
  }
}

export const senderApiService = new SenderApiService(process.env.SENDER_API_KEY);