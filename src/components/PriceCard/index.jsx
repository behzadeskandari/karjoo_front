import React from "react";
import "./PriceCard.css";
export default function PriceCard() {
  return (
    <section id="pricing">
      <div class="row">
        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>FREE</h3>
            </div>
            <div class="card-body">
              <h2>Free</h2>
              <p>No Listing</p>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button
                class="btn btn-lg btn-block btn-outline-dark"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>PLUS</h3>
            </div>
            <div class="card-body">
              <h2>$49 / mo</h2>
              <p>No Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button class="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div class="pricing-column col-lg-4">
          <div class="card">
            <div class="card-header">
              <h3>PRO</h3>
            </div>
            <div class="card-body">
              <h2>$99 / mo</h2>
              <p>Pirority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button class="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
