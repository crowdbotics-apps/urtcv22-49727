import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_yncbdh_list = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_list",
  async payload => {
    const response = await apiService.api_v1_yncbdh_list(payload)
    return response.data
  }
)
export const api_v1_yncbdh_create = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_create",
  async payload => {
    const response = await apiService.api_v1_yncbdh_create(payload)
    return response.data
  }
)
export const api_v1_yncbdh_retrieve = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_retrieve",
  async payload => {
    const response = await apiService.api_v1_yncbdh_retrieve(payload)
    return response.data
  }
)
export const api_v1_yncbdh_update = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_update",
  async payload => {
    const response = await apiService.api_v1_yncbdh_update(payload)
    return response.data
  }
)
export const api_v1_yncbdh_partial_update = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_partial_update",
  async payload => {
    const response = await apiService.api_v1_yncbdh_partial_update(payload)
    return response.data
  }
)
export const api_v1_yncbdh_destroy = createAsyncThunk(
  "yncbdhs/api_v1_yncbdh_destroy",
  async payload => {
    const response = await apiService.api_v1_yncbdh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const yncbdhsSlice = createSlice({
  name: "yncbdhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_yncbdh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yncbdh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yncbdh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_yncbdh_list,
  api_v1_yncbdh_create,
  api_v1_yncbdh_retrieve,
  api_v1_yncbdh_update,
  api_v1_yncbdh_partial_update,
  api_v1_yncbdh_destroy,
  slice: yncbdhsSlice
}
