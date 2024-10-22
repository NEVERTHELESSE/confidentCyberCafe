

import {Videos} from './video'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(Videos);
}
