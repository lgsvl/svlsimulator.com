declare module '@mailchimp/mailchimp_marketing' {
  type Config = {
    apiKey?: string;
    accessToken?: string;
    server?: string;
  };

  type PingSuccess = { health_status: string };
  type PingError = { type: string; title: string; status: number; detail: string; instance: string };

  export type AddListMemberBody = {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
    merge_fields?: { [key: string]: any };
  };

  type SetListMemberOptions = {
    skipMergeValidation: boolean;
  };

  export type SetListMemberBody = {
    email_address: string;
    status_if_new: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
    merge_fields?: { [key: string]: any };
  };

  export default {
    setConfig: (config: Config) => {},
    ping: {
      get: (): Promise<void> => PingSuccess | PingError
    },
    lists: {
      addListMember: (
        listId: string,
        opts?: AddListMemberBody
      ): Promise<{
        id: string;
      }> => {},
      setListMember: (
        listId: string,
        subscriberHash: string,
        body: SetListMemberBody,
        opts?: SetListMemberOptions
      ): Promise<void> => {}
    }
  };
}
