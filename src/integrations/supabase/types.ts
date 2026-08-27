export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.17"
  }
  public: {
    Tables: {
      assessment_criteria: {
        Row: {
          company_id: string
          created_at: string
          id: string
          methodology: string | null
          name: string
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          sort_order: number
          source_reference: string | null
          summary: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          methodology?: string | null
          name: string
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          sort_order?: number
          source_reference?: string | null
          summary: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          methodology?: string | null
          name?: string
          rating?: Database["public"]["Enums"]["esg_rating"]
          score?: number
          sort_order?: number
          source_reference?: string | null
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_criteria_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          country: string
          created_at: string
          e_score: number
          exchange: string
          g_score: number
          id: string
          name: string
          overall_rating: Database["public"]["Enums"]["overall_action"]
          overall_score: number
          report_year: number
          s_score: number
          sector: string
          summary: string
          ticker: string
          updated_at: string
        }
        Insert: {
          country: string
          created_at?: string
          e_score: number
          exchange: string
          g_score: number
          id: string
          name: string
          overall_rating: Database["public"]["Enums"]["overall_action"]
          overall_score: number
          report_year: number
          s_score: number
          sector: string
          summary: string
          ticker: string
          updated_at?: string
        }
        Update: {
          country?: string
          created_at?: string
          e_score?: number
          exchange?: string
          g_score?: number
          id?: string
          name?: string
          overall_rating?: Database["public"]["Enums"]["overall_action"]
          overall_score?: number
          report_year?: number
          s_score?: number
          sector?: string
          summary?: string
          ticker?: string
          updated_at?: string
        }
        Relationships: []
      }
      company_issues: {
        Row: {
          company_id: string
          created_at: string
          detail: string
          id: string
          name: string
          rank: number
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          source_methodology: string
          source_reference: string
          source_report_page: string | null
          source_standard: string
          summary: string
        }
        Insert: {
          company_id: string
          created_at?: string
          detail: string
          id?: string
          name: string
          rank: number
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          source_methodology: string
          source_reference: string
          source_report_page?: string | null
          source_standard: string
          summary: string
        }
        Update: {
          company_id?: string
          created_at?: string
          detail?: string
          id?: string
          name?: string
          rank?: number
          rating?: Database["public"]["Enums"]["esg_rating"]
          score?: number
          source_methodology?: string
          source_reference?: string
          source_report_page?: string | null
          source_standard?: string
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_issues_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      esg_metrics: {
        Row: {
          category: Database["public"]["Enums"]["esg_category"]
          company_id: string
          created_at: string
          detail: string
          id: string
          name: string
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          sort_order: number
          source_methodology: string
          source_reference: string
          source_report_page: string | null
          source_standard: string
          summary: string
        }
        Insert: {
          category: Database["public"]["Enums"]["esg_category"]
          company_id: string
          created_at?: string
          detail: string
          id: string
          name: string
          rating: Database["public"]["Enums"]["esg_rating"]
          score: number
          sort_order?: number
          source_methodology: string
          source_reference: string
          source_report_page?: string | null
          source_standard: string
          summary: string
        }
        Update: {
          category?: Database["public"]["Enums"]["esg_category"]
          company_id?: string
          created_at?: string
          detail?: string
          id?: string
          name?: string
          rating?: Database["public"]["Enums"]["esg_rating"]
          score?: number
          sort_order?: number
          source_methodology?: string
          source_reference?: string
          source_report_page?: string | null
          source_standard?: string
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "esg_metrics_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_materiality: {
        Row: {
          company_id: string
          component: Database["public"]["Enums"]["materiality_component"]
          created_at: string
          detail: string
          direction: Database["public"]["Enums"]["valuation_direction"]
          financial_reference: string
          id: string
          sort_order: number
          summary: string
        }
        Insert: {
          company_id: string
          component: Database["public"]["Enums"]["materiality_component"]
          created_at?: string
          detail: string
          direction: Database["public"]["Enums"]["valuation_direction"]
          financial_reference: string
          id?: string
          sort_order?: number
          summary: string
        }
        Update: {
          company_id?: string
          component?: Database["public"]["Enums"]["materiality_component"]
          created_at?: string
          detail?: string
          direction?: Database["public"]["Enums"]["valuation_direction"]
          financial_reference?: string
          id?: string
          sort_order?: number
          summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "financial_materiality_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      esg_category: "E" | "S" | "G"
      esg_rating: "Leader" | "Strong" | "Average" | "Laggard"
      materiality_component:
        | "Revenue"
        | "Expenses"
        | "Assets & Liabilities"
        | "Cost of capital"
      overall_action: "Monitor" | "Engage" | "Escalate"
      valuation_direction: "Headwind" | "Neutral" | "Tailwind"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      esg_category: ["E", "S", "G"],
      esg_rating: ["Leader", "Strong", "Average", "Laggard"],
      materiality_component: [
        "Revenue",
        "Expenses",
        "Assets & Liabilities",
        "Cost of capital",
      ],
      overall_action: ["Monitor", "Engage", "Escalate"],
      valuation_direction: ["Headwind", "Neutral", "Tailwind"],
    },
  },
} as const
