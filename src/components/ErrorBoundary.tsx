import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('EasyConverter Error caught:', error, errorInfo);
    }
  }

  private handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xl dark:border-[#334155] dark:bg-[#1E293B]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#DC2626] dark:bg-red-950/40 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Something went wrong
            </h2>
            <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
              An unexpected error occurred while rendering this tool. Try refreshing the page to reset the state.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reload Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
