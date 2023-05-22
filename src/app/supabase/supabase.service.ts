import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_KEY
    );
  }

  async signIn(email: string) {
    const { data, error } = await this.supabaseClient.auth.signInWithOtp({
      email,
    });

    if (error) {
      console.log('Error on signIn', error);
      return { user: null, session: null };
    }

    return data;
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log('Error on signUp', error);
      return { user: null, session: null };
    }

    return data;
  }

  async getUser() {
    const {
      data: { user },
    } = await this.supabaseClient.auth.getUser();

    return user;
  }

  async signOut() {
    const { error } = await this.supabaseClient.auth.signOut();
    return error;
  }
}
