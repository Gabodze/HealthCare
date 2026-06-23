import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { StatCard } from '@/components/ui/StatCard'
import { DataTable } from '@/components/table/DataTable'
import { columns } from '@/components/table/columns'

const Admin = () => {
  const appointments = {
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    documents: [] as any[],
  }
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={32}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header"> Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount ?? 0}
            label="Scheduled appointments"
            icon={'/assets/icons/appointments.svg'}
          />

          <StatCard
            type="pending"
            count={appointments.pendingCount ?? 0}
            label="Pending appointments"
            icon={'/assets/icons/pending.svg'}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount ?? 0}
            label="Cancelled appointments"
            icon={'/assets/icons/cancelled.svg'}
          />
        </section>
        <DataTable columns={columns} data={appointments.documents ?? []} />
        {/* <DataTable columns={columns} data={data} /> */}
      </main>
    </div>
  )
}

export default Admin
